import { Container } from "@mui/system";
import React, { useContext } from "react";
import { Context } from "../../context/MainContext";
import Item from "./Item";
import "../../css/ShopGrid.css";
import { Grid } from "@mui/material";

export default function ShopGrid() {
  const { data, getProducts } = useContext(Context);

  getProducts();
  const items = data.map((product) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Item
          key={product.title}
          image={product.image}
          category={product.category}
          title={product.title}
          price={product.price}
        />
      </Grid>
    );
  });

  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          {items}
        </Grid>
      </Container>
    </div>
  );
}
