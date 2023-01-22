import { Container } from "@mui/system";
import React, { useContext } from "react";
import { Context } from "../../context/MainContext";
import Item from "./Item";
import "../../css/ShopGrid.css";
import { Grid } from "@mui/material";

export default function ShopGrid() {
  // const { data, getProducts } = useContext(Context);

  // getProducts();
  // const items = data.map((product) => {
  //   return (
  //     <Grid item xs={12} sm={6} md={4} lg={3}>
  //       <Item
  //         key={product.id}
  //         image={product.image}
  //         category={product.category}
  //         title={product.title}
  //         price={product.price}
  //       />
  //     </Grid>
  //   );
  // });

  // return (
  //   <div>
  //     <Container>
  //       <div className="centering-dev">
  //         <Grid
  //           container
  //           spacing={{ xs: 2, md: 3 }}
  //           columns={{ xs: 4, sm: 8, md: 12 }}
  //         >
  //           {items}
  //         </Grid>
  //       </div>
  //     </Container>
  //   </div>
  // );
  return <h1>hi</h1>
}
