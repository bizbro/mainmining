import * as React from 'react';
import { useState, useEffect } from 'react';
import './Asic.css';
import './Tables.css';
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Product from '../Product/Product';
import useStyles from '../Product/styles';
import { margin, textAlign, width } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from "react-helmet";
import useScript from "./useScript";

toast.configure()

const A11ProDetails = ({ products, onAddToCart }) => {  
  const [product, setProduct] = useState(1);

  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;
  console.log(products[0].id);



  const handleAddToCart = () => onAddToCart(products[0].id, product);
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
  <img src='../images/productimgs/A11 Pro.png'/>
  </div>
  <div class="bbox price-box">
  <Typography style={{fontSize:32}} variant="h4" gutterBottom component="div">A11 PRO</Typography>
  <Typography  style={{fontSize:28}} variant="h4" gutterBottom component="div">1500MH/s ETH miner</Typography>
  <Typography style={{fontSize:21}} variant="h4" gutterBottom component="div">Innosilicon</Typography>
    <Divider/>
  <Typography style={{fontSize:25}} variant="h4" gutterBottom component="div">Price: $13,499.00</Typography>
    <Divider/>

  <h1 className='nis'>Currently not in Stock</h1>
  </div>


  <div class="bbox description-box"> 
  <Typography style={{fontSize:28}} variant="h4" gutterBottom component="div">Specifications</Typography>
    <table className="table">
      <tr>
        <td>Version</td>
        <td>A11 PRO</td>
      </tr>
      <tr>
        <td>Manufacturer</td>
        <td>Innosilicon</td>
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
        <td>EtHash</td>
      </tr>
      <tr>
        <td>Hashrate</td>
        <td>1500MH/s ±5%</td>
      </tr>
      <tr>
        <td>Power Consumption</td>
        <td>2350W ±4%</td>
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
        <td>Net weight</td>
        <td>16 kg</td>
      </tr>
    </table>
  </div> 
  
  </div>
  </div>
  );
}
export default A11ProDetails;