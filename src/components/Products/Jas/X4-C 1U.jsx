import * as React from 'react';
import { useState } from 'react';
import './Asic.css';
import './Tables.css';
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from '../Product/Product';
import useStyles from '../Product/styles';
import { margin, textAlign, width } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const X41U1UDetails = ({ products, onAddToCart }) => {  
  const [product, setProduct] = useState(1);

  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;
  console.log(products[0].id);


  const handleAddToCart = () => onAddToCart(products[11].id, product);
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
  <img src='../images/productimgs/X4-1U.png'/>
  </div>
  <div class="bbox price-box">
  <Typography style={{fontSize:32}} variant="h4" gutterBottom component="div">X4-C 1U</Typography>
  <Typography  style={{fontSize:28}} variant="h4" gutterBottom component="div">520MH/s 450MH/s ETH/ETChash</Typography>
  <Typography style={{fontSize:21}} variant="h4" gutterBottom component="div">Jasminer</Typography>
    <Divider/>
  <Typography style={{fontSize:25}} variant="h4" gutterBottom component="div">Price: $5,099.00</Typography>
    <Divider/>
  <h1 className='nis'>Currently not in Stock</h1>
  </div>
    
  <div class="bbox description-box"> 
  <Typography style={{fontSize:28}} variant="h4" gutterBottom component="div">Specifications</Typography>
    <table className="table">
      <tr>
        <td>Version</td>
        <td>SUNLUNE JASMINER X4-C 1U</td>
      </tr>
      <tr>
        <td>Manufacturer</td>
        <td>Jasminer</td>
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
        <td>ETCHASH, ETHHASH</td>
      </tr>
      <tr>
        <td>Hashrate</td>
        <td>450/s ±9%</td>
      </tr>
      <tr>
        <td>Power Consumption</td>
        <td>240W ±10%</td>
      </tr>
      <tr>
        <td>Power supply AC Input voltage</td>
        <td>200~240V</td>
      </tr>
      <tr>
        <td>Networking connection mode</td>
        <td>RJ45 Ethernet</td>
      </tr>
      <tr>
        <td>Size</td>
        <td>450 x 44 x 462mm</td>
      </tr>
      <tr>
        <td>Net weight</td>
        <td>8 kg</td>
      </tr>
    </table>
  </div> 
  </div>
  </div>
  );
}
export default X41U1UDetails;