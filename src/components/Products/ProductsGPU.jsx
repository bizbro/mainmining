import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Products.css';
import Product from './Product/Product';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const ProductsGPU = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const routeGPU = "http://mainmining.com/graphicscards/";
  if (!products.length) return <p>Loading...</p>;
  console.log("products:",products);


  const asicarray = [];

  asicarray.push(products[8]);
  asicarray.push(products[9]);
  asicarray.push(products[14]);
  console.log(asicarray);
  return (
    <div className='mginheight'>
    <main className={classes.content}>
    <Typography className='htitle' style={{fontSize:37}} variant="h4" gutterBottom component="div">Graphics Cards</Typography>
      <div className={classes.toolbar} />
      <Grid container justify="left" spacing={4} >
        {asicarray.map((product) => (
          <Grid key={product.id} item xs={10} lg={6} xl={4} spacing={3} container justify="center">
            <Product route={routeGPU} product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </div>
  );
};

export default ProductsGPU;

