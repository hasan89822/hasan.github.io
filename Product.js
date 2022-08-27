import React from 'react';
import { useStyles } from './Product.style';
import {  Card, Typography } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export const Product = ({product,index})=>{
    const classes = useStyles();

   return (
     <>
       <Card key={index} className={classes.paperHeight}>
         <Typography className={classes.title} variant="h6" gutterBottom>
           {index + 1}. {product.title}
           <span className={classes.category}>
             {product.subcategory.toUpperCase()}
           </span>
         </Typography>
         <div className={classes.productDetails}>
           <div className={classes.price}>${product.price}</div>
           <Typography className={classes.trend} variant="subtitle1" gutterBottom>
             <TrendingUpIcon />
             {product.popularity}
           </Typography>
         </div>
       </Card>
     </>
   );

};