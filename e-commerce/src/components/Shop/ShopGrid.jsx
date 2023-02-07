import "../../css/ShopGrid.css";
import SubHeader from "../SubHeader";
import Item from "./Item";
import { useMemo } from "react";
import React, { useContext, useState } from "react";
import { Container } from "@mui/system";
import { Context } from "../../context/MainContext";
import { Typography, Rating, Stack } from '@mui/material'
import { Grid } from "@mui/material";
import {Box, InputLabel, MenuItem, FormControl, Select, Slider} from "@mui/material";

function ShopGrid() {

  const { data } = useContext(Context);

  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('')
  const [rate, setRate] = useState('')

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(category)
  };

  function getFilteredCategoryList() {
    if(!category) {
      return data;
    }
    return data.filter((product) => product.category === category)
  }

  const filteredCategoryList = useMemo(getFilteredCategoryList, [category, data])

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
    console.log(price)
  }

  function getFilteredPriceList() {
    if(!price) {
      return filteredCategoryList;
    }
    return filteredCategoryList.filter((product) => product.price > parseInt(price, 10))
  }

  const filteredPriceList = useMemo(getFilteredPriceList, [price, filteredCategoryList])


  const handleRateChange = (event) => {
    setRate(event.target.value)
    console.log(rate)
  }

  function getFilteredRateList () {
    if(!rate) {
      return filteredPriceList;
    }
    return filteredPriceList.filter((product) => product.rating.rate >= rate)
  }

  const filteredRateList = useMemo(getFilteredRateList, [rate, filteredPriceList])

  const featured_cards = filteredRateList.map((product, index) => {
    return (
      <Item
        id={product.id}
        key={index}
        product={product}
        title={product.title}
        price={product.price}
        image={product.image}
        rating={product.rating}
      />
    )
  })

  return (
    <div className="shopgrid">
      <SubHeader 
        loc='Home . Pages'
        path='ShopList'
      />
      <div className="section-details">
        <div className="container-lg d-block d-md-flex justify-content-between align-items-end">
          <div className="details">
            <div className="styled-h2 mt-5 text-start">
              Ecommerce Acceories & Fashion item 
            </div>
            <p className=''>Select A Specific Category</p>
          </div>

          <Box className=' d-flex flex-column justify-content-center align-items-center box' >
            <h2 className="styled-h2 mt-4 p-2 d-md-none">Filter</h2>
            <FormControl className='mt-4'>
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
            <br />
            <Box width={300}>
              <Slider
                value={price}
                aria-label="Temperature"
                defaultValue={0}
                valueLabelDisplay="auto"
                step={50}
                marks
                min={0}
                max={1000}
                onChange={handlePriceChange}
              />
            </Box>
            <Rating 
              name="size-large"
              defaultValue={0} 
              size="large" 
              value={rate}
              onChange={handleRateChange}
            />
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
            <div className="row d-flex justify-content-center">
              {data.length 
                ? 
                  featured_cards.map((card) => {
                    return (
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5">
                          {card}
                      </div>
                    )
                  })
                :
                <div class="custom-loader mt-5"></div>
              }
            </div>
          {/* </Grid> */}
        </div>
      </Container>
    </div>
  );
}

export default ShopGrid;

// category ? getProducts(`products/category/${category}`) : getProducts();

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