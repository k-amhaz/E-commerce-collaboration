import { useEffect } from "react";
import { createContext, useState } from "react";
import { Typography, Rating, Stack } from '@mui/material'
import { useMemo } from "react";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {

  const [data, setData] = useState([]);

  // const [price, setPrice] = useState('');

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)      
      .then((res) => res.json())
      .then((data) => setData(data))
  }, []);

  const getActiveItem = (itemsArray) => {
    itemsArray.forEach((child) => {
      child.addEventListener( "click" , (e) => {
        itemsArray.forEach((child) => {
          child.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
      });
    });
  }

  const HalfRating = (product) => {
    return (
        <Stack spacing={1}>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            <Rating className="half-rating-read mb-4" defaultValue={product.rating.rate} precision={0.5} readOnly />
        </Stack>
    );
  }

  return (
    <Provider value={
        { data, 
          // prsice,
          // handlePriceChange,
          getActiveItem, 
          HalfRating,
        }
      }>
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };
