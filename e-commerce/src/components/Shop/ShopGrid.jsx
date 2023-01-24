import "../../css/ShopGrid.css";
import SubHeader from "../SubHeader";
import Item from "./Item";
import React, { useContext, useState } from "react";
import { Container } from "@mui/system";
import { Context } from "../../context/MainContext";
import { Typography, Rating, Stack } from '@mui/material'
import { Grid } from "@mui/material";
import {Box, InputLabel, MenuItem, FormControl, Select} from "@mui/material";

function ShopGrid() {

  const { data, getProducts, category, handleCategoryChange } = useContext(Context);
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([])

  category ? getProducts(`products/category/${category}`) : getProducts();

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

  const featured_cards = products.map((product) => {
    return (
      <Item
        id={product.id}
        key={product.id}
        product={product}
        title={product.title}
        price={product.price}
        image={product.image}
      />
    )
  })
  console.log(featured_cards)

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
    setProducts(data.filter((product) => {
      if(product.price < price) {
        return product
      }
    }))
  }

  return (
    <div className="shopgrid">
      <SubHeader 
        loc='Home . Pages'
        path='ShopList'
      />
      <div className="section-details">
        <div className="container-lg d-flex justify-content-between align-items-end">
          <div className="details">
            <div className="styled-h2 mt-5 text-start">
              Ecommerce Acceories & Fashion item 
            </div>
            <p className=''>Select A Specific Category</p>
          </div>
          <Box className='text-center box' >
            <FormControl>
              <InputLabel id="demo-simple-select-label" >Category</InputLabel >
              <Select
                className="category-field"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value={'electronics'}>electronics</MenuItem>
                <MenuItem value={'jewelery'}>jewelery</MenuItem>
                <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
                <MenuItem value={"women's clothing"}>women's clothing</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
            <InputLabel id="demo-simple-select-label" >Price</InputLabel >
              <Select
                className="category-field"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="Category"
                onChange={handlePriceChange}
              >
                <MenuItem value={"20"}>$0.00 - $20.00</MenuItem>
                <MenuItem value={"60"}>$20.00 - $60.00</MenuItem>
                <MenuItem value={"80"}>$60.00 - $100.00</MenuItem>
                <MenuItem value={"120"}>$100.00 - 120.00</MenuItem>
              </Select> 
            </FormControl>
          </Box>
        </div>
      </div>
      <Container>
        <div className="centering-dev">
          {/* <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          > */}
            <div className="row">
              {featured_cards.map((card) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                      {card}
                  </div>
                )
              })}
            </div>
          {/* </Grid> */}
        </div>
      </Container>
    </div>
  );
}

export default ShopGrid;