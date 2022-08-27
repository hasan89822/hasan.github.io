import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { productListStyle } from "./ProductList.style";

export const ProductList = () => {
  const classes = productListStyle();

  const [products, setProducts] = useState([]);
  const baseURL = "https://s3.amazonaws.com/open-to-cors/assignment.json";

  const fetchProduct = () => {
    axios.get(baseURL).then((response) => {
      if (response) {
        const product = Object.values(response.data.products).sort(
          (firstElement, secondElement) =>
              secondElement.popularity -firstElement.popularity
        );
        setProducts(product);
      }
    });
  };

  


  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Grid container spacing={3}>
        {products.map((product, index) => {
          return (
            <Grid key={index} className={classes.grid} item xs={4}>
              <Product index={index} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
