import "../../css/ShopGrid.css";
import SubHeader from "../SubHeader";
import Item from "./Item";
import React, { useContext, useState } from "react";
import { Container } from "@mui/system";
import { Context } from "../../context/MainContext";
import { Typography, Rating, Stack } from '@mui/material'
import { Grid } from "@mui/material";
import {Box, InputLabel, MenuItem, FormControl, Select} from "@mui/material";

export default function ShopGrid() {

  const { data, getProducts } = useContext(Context);


  const [category, setCategory] = useState('');
  getProducts()


  // category ? getProducts(category) : getProducts()


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
  console.log(data)

  const HalfRating = (product) => {
    return (
      <Stack spacing={1}>
          {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
          <Rating className="half-rating-read mb-4" defaultValue={product.rating.rate} precision={0.5} readOnly />
      </Stack>
    );
  }

  function cardItem (product) {
      const [isShown, setIsShown] = useState(false)
      return (
          <div 
              className="card  shadow-lg featured-card text-start d-flex justify-content-center align-items-center flex-column" 
              id={product.id} 
              onMouseEnter={() => setIsShown(true)}
              key={product.id}
              onMouseLeave={() =>setIsShown(false)}
          >
              <div className="card-img d-flex justify-content-center align-items-center p-relative">
                  {isShown && <ul className='list-unstyled d-flex justify-content-center align-items-center gap-3'>
                      <li><i className="bi bi-cart"></i></li>
                      <li><i className="bi bi-heart"></i></li>
                  </ul>}
                  <img src={product.image} className="card-img-top my-4 " alt="..."/>
              </div>
              <div className="card-body text-center mt-4">
                  <p className=" product-title">{product.title}</p>
                  <h5 className=" product-price text-center fw-bold mb-0">$ {product.price}</h5>
              </div>
              {HalfRating(product)}
              <div className="btn add-to-cart-btn ">
                  View Details
              </div>
          </div> 
      )
  }

    const featured_cards = data.map((product) => {
      return cardItem(product)
    })
    console.log(featured_cards)

    const handleChange = (event) => {
      setCategory(event.target.value);
      console.log(category)
    };

  return (
    <div className="shopgrid">
      <SubHeader 
        loc='Home . Pages'
        path='ShopList'
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={() => handleChange(event)}
          >
            <MenuItem value={'electronics'}>electronics</MenuItem>
            <MenuItem value={'jewelery'}>jewelery</MenuItem>
            <MenuItem value={'mens clothing'}>men\'s clothing</MenuItem>
            <MenuItem value={'womens clothing'}>women's clothing</MenuItem>
          </Select>
        </FormControl>
      </Box>
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

