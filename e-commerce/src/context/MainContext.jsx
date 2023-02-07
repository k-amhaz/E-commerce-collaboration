import { createContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "../data/DataBase";
import { Typography, Rating, Stack, Button, Alert } from '@mui/material'
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Context = createContext();
const { Provider } = Context;

const ContextProvider = (props) => { 

  const [data, setData] = useState([]);
  const [linkedProduct, setLinkedProduct] = useState('')
  const [finalItems, setFinalItems] = useState([])
  const [subtotals, setSubtotals] = useState(0)
  const [isClearedWishList, setIsClearedWishList] = useState(false)
  const [realItems, setRealItems] = useState({
    basket: [],
    user: null,
    wishList: [],
  })

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

  const handleFinalItems = (prod) => {
    setFinalItems(prod)
  }

  const handleCartItems = (event) => {

    // setCartItems(prev => [prev, event.target.id])
    // setCartItems(prev => [...prev ,event.target.id])
    // console.log(cartItems) 

    setFinalItems(data.filter((product) => {
      return product.id == parseInt(event.target.id)
    }))
    var cartArray = new Array();

    if (sessionStorage.getItem('shopping-cart')) {
      cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
    }

    cartArray.push(finalItems);

    var cartJSON = JSON.stringify(cartArray);
    sessionStorage.setItem('shopping-cart', cartJSON);
    window.alert("Item is succefully added to the cart")

      // console.log(finalItems)

    	// var cartItemJSON = JSON.stringify(finalItems);
      // console.log(cartItemJSON)

      // If javascript shopping cart session is not empty

      // console.log(cartArray)
      // console.log(JSON.parse(cartJSON)[2])
  }

  const handleIsClearedWishList = (bool) =>{
    setIsClearedWishList(bool)
  }

  const getRealItemsTotal = (items) => {
    return items?.reduce((amount, item) => {
      return parseInt(item.price + amount)
    }, 0)
  }


  // useEffect(() => {
  //   // onAuthStateChanged(auth, (authUser) => {
  //   //   console.log('the user is', authUser)

  //   //   if(authUser) {
  //   //     reducer({
  //   //       type: "SET_USER",
  //   //       user: authUser,
  //   //     })
  //   //   } else {
  //   //     reducer({
  //   //       type: "SET_USER",
  //   //       user: null,
  //   //     })
  //   //   }
  //   // })
  // }, [])

  const reducer = (action) => {
    // console.log(action)
    // console.log(action.type)

    switch (action.type) {
      case 'ADD_TO_BASKET' :
        // console.log(realItems.basket)
        return setRealItems((realItems) =>  {
          return {
            ...realItems,
            basket: [...realItems.basket, action.item],
          }
        })

      case "REMOVE_FROM_BASKET" :
        const index = realItems.basket.findIndex(
          (item) => item.id === action.item.id
        )

        let newRealItems = [...realItems.basket];

        if(index >= 0) {
          newRealItems.splice(index, 1)
        } else {
          console.warn(
            `Cant remove product (id: ${action.item.id}) as its not in basket!`
          )
        }

        return setRealItems((realItems) => {
          return {
            ...realItems,
            basket: newRealItems
          }
        })
      
      
        
      case "CLEAR_BASKET" :
        return setRealItems(() => {
          return {
            ...realItems,
            basket: []
          }
        })
      

      case "SET_USER": 
        return setRealItems(() => {
          return {
            ...realItems,
            user: action.user
          }
        })

      case 'ADD_TO_WISHLIST' :
        return setRealItems((realItems) =>  {
          return {
            ...realItems,
            wishList: [...realItems.wishList, action.item],
          }
        })

      case "REMOVE_FROM_WISHLIST" :
        const indexWishList = realItems.wishList.findIndex(
          (item) => item.id === action.item.id
        )

        let newWishListItems = [...realItems.wishList];

        if(indexWishList >= 0) {
          newWishListItems.splice(indexWishList, 1)
        } else {
          console.warn(
            `Cant remove product (id: ${action.item.id}) as its not in wishList!`
          )
        }

        return setRealItems((realItems) => {
          return {
            ...realItems,
            wishList: newWishListItems
          }
        })

      case "CLEAR_WISHLIST" :
        return setRealItems(() => {
          return {
            ...realItems,
            wishList: []
          }
        })
        
      default :
        return realItems;
    }
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
          finalItems,
          handleFinalItems,
          realItems, 
          reducer,
          subtotals,
          getRealItemsTotal,
        }
      }
    >
      {props.children}
    </Provider>
  );
};

export { ContextProvider, Context };
