import { createContext, useState } from "react";
import { useEffect } from "react";
import { Typography, Rating, Stack } from '@mui/material'

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {

  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  function getProducts (path = 'products') {
    useEffect(() => {
      fetch(`https://fakestoreapi.com/${path}`)      
        .then((res) => res.json())
        .then((data) => setData(data))
    }, [category]);
  }

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

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  

  return (
    <Provider value={
        { data, 
          category, 
          price, 
          handleCategoryChange, 
          handlePriceChange, 
          getProducts, 
          getActiveItem, 
          HalfRating,
        }
      }>
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };
