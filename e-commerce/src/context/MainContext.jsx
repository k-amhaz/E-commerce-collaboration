import { useEffect } from "react";
import { createContext, useState } from "react";
import { Typography, Rating, Stack, Button } from '@mui/material'
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {

  const [data, setData] = useState([]);
  const [linkedProduct, setLinkedProduct] = useState('')

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

  const handleLinkedBtn = (event) => {
    setLinkedProduct(event.target)
  }

  const addToCartBtn = (text, icon, outlined) => {
    return (
      <Button className="add-to-cart-btn btn" endIcon={icon} variant={outlined}>
        {text}
      </Button>
    )
  }


  const linkBtn = (to, btnText, id) => {
    return (
      <Link to={`${to}`} className='link-btn btn' onClick={(event) => handleLinkedBtn(event)} id={id}>  
        {btnText}
      </Link>
    )
  }

  return (
    <Provider 
      value={
        { data,
          getActiveItem, 
          HalfRating,
          linkBtn,
          linkedProduct,
          addToCartBtn,
        }
      }
    >
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };
