import React from "react";
import "../../css/Item.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../../context/MainContext";
import { Alert } from "@mui/material";

export default function Item(props) {
  const {
    HalfRating,
    linkBtn,
    handleCartItems,
    handleRealItems,
    reducer,
    realItems,
  } = useContext(Context);

  const [isShown, setIsShown] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const addToBasket = () => {
    // console.log(realItems)
    reducer({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        description: props.description,
        rating: props.rating,
        count: props.rating.count,
        rate: props.rating.rate,
        product: props.product,
      },
    });
  };

  function decrementQuantity() {
    setQuantity((prev) => (prev >= 1 ? prev - 1 : prev));
  }

  function incrementQuantity() {
    setQuantity((prev) => prev + 1);
  }

  const addToWishList = () => {
    console.log(realItems);
    reducer({
      type: "ADD_TO_WISHLIST",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        description: props.description,
        rating: props.rating,
        count: props.rating.count,
        rate: props.rating.rate,
        product: props.product,
      },
    });
  };

  const removeFromWishList = () => {
    reducer({
      type: "REMOVE_FROM_WISHLIST",
      item: {
        id: props.id,
      },
    });
    setIsFavorited(false);
  };

  return (
    <div
      className="card mt-5 shadow-lg featured-card text-start d-flex justify-content-center align-items-center flex-column"
      id={props.id}
      key={props.key}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="card-img d-flex justify-content-center align-items-center p-relative">
        {isShown && (
          <ul className="list-unstyled d-flex justify-content-center align-items-center gap-3">
            <li>
              <i className="bi bi-cart" id={props.id} onClick={addToBasket}></i>
            </li>
            <li>
              <i
                className="bi bi-heart"
                id={props.id}
                onClick={addToWishList}
              ></i>
            </li>
          </ul>
        )}
        <img src={props.image} className="card-img-top my-4 " alt="..." />
      </div>

      <div className="card-body text-center mt-4">
        <p className=" product-title">{props.title}</p>
        <h5 className=" product-price text-center fw-bold mb-0">
          $ {props.price}
        </h5>
      </div>
      {HalfRating(props.product)}
      {linkBtn("/details", "View Details", props.id)}
    </div>
  );
}

// export default function Item(props) {
//   return (
//     <Card className="item-container">
//       <div className="img-holder">
//         <img src={props.image} alt="The product image" />
//         <div className="category">{props.category.toUpperCase()}</div>
//       </div>
//       <div className="info">
//         <div className="item-title">{props.title}</div>
//         <div className="colors">
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <div className="item-price">${props.price}</div>
//       </div>
//     </Card>
//   );
// }
