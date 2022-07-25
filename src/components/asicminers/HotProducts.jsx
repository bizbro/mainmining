import React from 'react';
import Grid from '@material-ui/core/Grid';
import "./style.css";
import Product from './Product/Product';
import useStyles from './styles';
import { Typography, Divider } from '@material-ui/core';

const HotProducts = ({ products, onAddToCart }) => {
  const classes = useStyles();
  const routeAsic = "http://localhost:3000/asicminers/";
  const routeGPU = "http://localhost:3000/graphicscards/";
  const routeJas = "http://localhost:3000/jasminers/";

  const asicarray = [];
  for (var i = 0; i <= 7; i++) {
    asicarray.push(products[i]);
  } 
  asicarray.push(products[12]);
  asicarray.push(products[13]);

  const gpuarray = [];
  gpuarray.push(products[8]);
  gpuarray.push(products[9]);
  gpuarray.push(products[14]);

  const jasarray = [];
  jasarray.push(products[10]);
  jasarray.push(products[11]);


  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <Typography className='ccenter' style={{fontSize:40}} variant="h4" gutterBottom component="div">All Products</Typography>
      <div className={classes.toolbar}/>

      <Grid container justify="center" spacing={4}  

  >

        {asicarray.map((product) => (
          <Grid key={product.id} item xs={10} lg={6} xl={4} spacing={3} container justify="center">
            <Product route={routeAsic} product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}

          {gpuarray.map((product) => (
        <Grid key={product.id} item xs={10} lg={6} xl={4} spacing={3} container justify="center">
            <Product route={routeGPU} product={product} onAddToCart={onAddToCart} />
        </Grid>
        ))}

        {jasarray.map((product) => (
          <Grid key={product.id} item xs={10} lg={6} xl={4} spacing={3} container justify="center">
            <Product route={routeJas} product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
        
      </Grid>
    </main>
    
  );
};

export default HotProducts;

{/* <>
<section className='flash'>
  <div className='container'>
    <div id="textbox">
      <h1 className="alignleft">
        <Link to='/antminer'>ASIC MINERS</Link>
      </h1>
      <h2 className="aligncenter">
        <Link to='/asicminers'><span className="colorgrey">View all</span></Link>
        <Link to='/asicminers'><i className='fa-solid fa-caret-right'></i></Link>
      </h2>
    </div>
    <FlashCard productItems={productItems} addToCart={addToCart} />
  </div>
</section>
</> */}