import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Products.css';
import Product from './Product/Product';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const routeAsic = "http://localhost:3000/asicminers/";
  if (!products.length) return <p>Loading...</p>;
  console.log("products:",products);


  const asicarray = [];

  for (var i = 0; i <= 7; i++) {
    asicarray.push(products[i]);
  } 
  asicarray.push(products[12]);
  asicarray.push(products[13]);


  console.log(asicarray);
  return (
    <main className={classes.content}>
      <Typography className='htitle' style={{fontSize:37}} variant="h4" gutterBottom component="div">Asic Miners</Typography>
      
      <div className={classes.toolbar} />
      <Grid container justify="left" spacing={4} >
        {asicarray.map((product) => (
          <Grid key={product.id} item xs={10} lg={6} xl={4} spacing={3} container justify="center">
            <Product route={routeAsic} product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

