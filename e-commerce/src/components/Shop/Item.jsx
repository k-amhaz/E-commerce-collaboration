import React from "react";
import "../../css/Item.css";
import { Card } from "@mui/material";

export default function Item(props) {
  return (
    <Card className="item-container">
      <div className="img-holder">
        <img src={props.image} alt="The product image" />
        <div className="category">{props.category.toUpperCase()}</div>
      </div>
      <div className="info">
        <div className="item-title">{props.title}</div>
        <div className="colors">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="item-price">${props.price}</div>
      </div>
    </Card>
  );
}
