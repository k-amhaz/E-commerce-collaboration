import { createContext, useState } from "react";
import { useEffect } from "react";
import { Typography, Rating, Stack, Button } from '@mui/material'
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => {

  const [data, setData] = useState([]);
  const [linkedProduct, setLinkedProduct] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [finalItems, setFinalItems] = useState([])

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

  
  const addToCartBtn = (text, icon, outlined, type) => {
    return (
      <Button className="add-to-cart-btn btn" endIcon={icon} variant={outlined} type={type}>
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

  const handleCartItems = (event) => {

    // setCartItems(prev => [prev, event.target.id])
    // setCartItems(prev => [...prev ,event.target.id])
    // console.log(cartItems)
      setFinalItems(data.filter((product) => {
        return product.id == parseInt(event.target.id)
      }))

      // console.log(finalItems)

    	var cartItemJSON = JSON.stringify(finalItems);
      // console.log(cartItemJSON)

      var cartArray = new Array();
      // If javascript shopping cart session is not empty
      if (sessionStorage.getItem('shopping-cart')) {
        cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
      }

      cartArray.push(finalItems);

      var cartJSON = JSON.stringify(cartArray);
      sessionStorage.setItem('shopping-cart', cartJSON);

      // console.log(cartArray)
      // console.log(JSON.parse(cartJSON)[2])
      
    }

    const handleFinalItems = (prod) => {
      setFinalItems(prod)
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
          handleCartItems,
          cartItems,
          finalItems,
          handleFinalItems
        }
      }
    >
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };
