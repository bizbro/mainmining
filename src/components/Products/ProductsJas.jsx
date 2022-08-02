import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Products.css';
import Product from './Product/Product';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const ProductsJas = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const routeJas = "/jasminers/";
  if (!products.length) return <p>Loading...</p>;
  console.log("products:",products);


  const asicarray = [];

  asicarray.push(products[10]);
  asicarray.push(products[11]);

  console.log(asicarray);
  return (
    <div className='mjinheight'>
    <main className={classes.content}>
      <Typography className='htitle' style={{fontSize:37}} variant="h4" gutterBottom component="div">Jasminers</Typography>
      <div className={classes.toolbar} />
      <Grid container justify="left" spacing={4} >
        {asicarray.map((product) => (
          <Grid key={product.id} item xs={10} lg={6} xl={4} spacing={3} container justify="center">
            <Product route={routeJas} product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
    </div>
  );
};

export default ProductsJas;