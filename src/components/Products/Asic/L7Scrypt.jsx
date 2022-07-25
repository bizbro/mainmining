import * as React from 'react';
import { useState } from 'react';
import './Asic.css';
import './Tables.css';
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from '../Product/Product';
import useStyles from '../Product/styles';
import { margin, textAlign, width } from '@mui/system';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const L7Details = ({ products, onAddToCart }) => {  
  const [product, setProduct] = useState(1);

  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;
  console.log(products[1].id);


  const handleAddToCart = () => onAddToCart(products[4].id, product);
  const cardStyle = {
    display: "block",
    transitionDuration: "0.3s",
    height: "80px",
    width: "305px",
  };

  const notify = ()=>{
    toast.success('Item successfully added to cart', {
      // Set to 15sec
      position: toast.POSITION.BOTTOM_LEFT, autoClose:10000})
  }

  const wrapperFunction = () => {
    handleAddToCart();
    notify();
  }

  return (
    <div className='minprodheight'>
  <div class="ccontainer">
  
  <div class="bbox image-box">
  <img src='../images/productimgs/er34w.png'/>
  </div>
  <div class="bbox price-box">
  <Typography style={{fontSize:32}} variant="h4" gutterBottom component="div">Antminer L7</Typography>
  <Typography  style={{fontSize:28}} variant="h4" gutterBottom component="div">9.3 GH/s Scrypt miner</Typography>
  <Typography style={{fontSize:21}} variant="h4" gutterBottom component="div">Bitmain</Typography>
    <Divider/>
  <Typography style={{fontSize:25}} variant="h4" gutterBottom component="div">Price: $10,899.00</Typography>

    <Card className="cart-item" variant='outlined' textAlign="center" style={cardStyle}>
      <CardActions>
        <Button variant="contained" type="button" color="secondary" onClick={wrapperFunction}>Add to Cart</Button>
          <div className={classes.buttons} style={{ display: 'flex', alignItems: 'center', margin: "auto" }}>
            <Button variant='outlined' type="button" size="small" onClick={() => setProduct(product - 1)}>-</Button>
              <Typography>&nbsp;{product}&nbsp;</Typography>
            <Button variant='outlined' type="button" size="small" onClick={() => setProduct(product + 1)}>+</Button>
          </div>
      </CardActions>
      <p1 className="pp1"> Storage status: 3 items in stock</p1>
    </Card>
  </div>
    
  <div class="bbox description-box"> 
  <Typography style={{fontSize:28}} variant="h4" gutterBottom component="div">Specifications</Typography>
    <table className="table">
      <tr>
        <td>Version</td>
        <td>L7</td>
      </tr>
      <tr>
        <td>Manufacturer</td>
        <td>Bitmain</td>
      </tr>
      <tr>
        <td>Origin</td>
        <td>Hong Kong</td>
      </tr>
      <tr>
        <td>Shipped from</td>
        <td>Taiwan</td>
      </tr>
      <tr>
        <td>Crypto Algorithm</td>
        <td>Scrypt</td>
      </tr>
      <tr>
        <td>Hashrate</td>
        <td>9050MH/s ±8%</td>
      </tr>
      <tr>
        <td>Power Consumption</td>
        <td>3260W ±7%</td>
      </tr>
      <tr>
        <td>Power supply AC Input voltage</td>
        <td>200~240</td>
      </tr>
      <tr>
        <td>Networking connection mode</td>
        <td>RJ45 Ethernet</td>
      </tr>
      <tr>
        <td>Size</td>
        <td>195 x 290 x 370mm</td>
      </tr>
      <tr>
        <td>Net weight</td>
        <td>13.5 kg</td>
      </tr>
    </table>
  </div> 
  </div>
  </div>
  );
}
export default L7Details;