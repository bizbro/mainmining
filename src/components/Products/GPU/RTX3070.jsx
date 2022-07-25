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

const RTX3070Details = ({ products, onAddToCart }) => {  
  const [product, setProduct] = useState(1);

  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  const handleAddToCart = () => onAddToCart(products[8].id, product);
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
  <img src='../images/productimgs/RTX3070.png'/>
  </div>
  <div class="bbox price-box">
  <Typography style={{fontSize:32}} variant="h4" gutterBottom component="div">Geforce RTX 3070</Typography>
  <Typography style={{fontSize:21}} variant="h4" gutterBottom component="div">Nvidia</Typography>
    <Divider/>
  <Typography style={{fontSize:25}} variant="h4" gutterBottom component="div">Price: $729.00</Typography>

   <Card className="cart-item" variant='outlined' textAlign="center" style={cardStyle}>
      <CardActions>
        <Button variant="contained" type="button" color="secondary" onClick={wrapperFunction}>Add to Cart</Button>
          <div className={classes.buttons} style={{ display: 'flex', alignItems: 'center', margin: "auto" }}>
            <Button variant='outlined' type="button" size="small" onClick={() => setProduct(product - 1)}>-</Button>
              <Typography>&nbsp;{product}&nbsp;</Typography>
            <Button variant='outlined' type="button" size="small" onClick={() => setProduct(product + 1)}>+</Button>
          </div>
      </CardActions>
      <p1 className="pp1"> Storage status: 43 items in stock</p1>
    </Card>
  </div>
    
  <div class="bbox description-box"> 
  <Typography style={{fontSize:28}} variant="h4" gutterBottom component="div">Specifications</Typography>
    <table className="table">
      <tr>
        <td>Version</td>
        <td>ASUS ROG STRIX RTX 3070</td>
      </tr>
      <tr>
        <td>Manufacturer</td>
        <td>Nvidia</td>
      </tr>
      <tr>
        <td>Origin</td>
        <td>South Korea</td>
      </tr>
      <tr>
        <td>Shipped from</td>
        <td>Taiwan</td>
      </tr>
      <tr>
        <td>Hashrate (OC)</td>
        <td>61MH/s EtHash ±5%</td>
      </tr>
      <tr>
        <td>Power Consumption (OC)</td>
        <td>130W ±4%</td>
      </tr>
      <tr>
        <td>TDP</td>
        <td>220W ±6%</td>
      </tr>
      <tr>
        <td>Power Connectors</td>
        <td>1x 12-pin</td>
      </tr>
      <tr>
        <td>Cores</td>
        <td>5888</td>
      </tr>
      <tr>
        <td>Memory Size</td>
        <td>8 GB</td>
      </tr>
      <tr>
        <td>Memory Type</td>
        <td>GDDR6</td>
      </tr>
      <tr>
        <td>Memory Bus</td>
        <td>256 bit</td>
      </tr>
    </table>
  </div> 
  </div>
  </div>
  );
}
export default RTX3070Details;