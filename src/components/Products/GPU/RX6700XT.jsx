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

const RX6700XTDetails = ({ products, onAddToCart }) => {  
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
  <img src='../images/productimgs/RX6700XT.png'/>
  </div>
  <div class="bbox price-box">
  <Typography style={{fontSize:32}} variant="h4" gutterBottom component="div">RX 6700 XT</Typography>
  <Typography style={{fontSize:21}} variant="h4" gutterBottom component="div">AMD</Typography>
    <Divider/>
  <Typography style={{fontSize:25}} variant="h4" gutterBottom component="div">Price: $649.00</Typography>

   <Card className="cart-item" variant='outlined' textAlign="center" style={cardStyle}>
      <CardActions>
        <Button variant="contained" type="button" color="secondary" onClick={wrapperFunction}>Add to Cart</Button>
          <div className={classes.buttons} style={{ display: 'flex', alignItems: 'center', margin: "auto" }}>
            <Button variant='outlined' type="button" size="small" onClick={() => setProduct(product - 1)}>-</Button>
              <Typography>&nbsp;{product}&nbsp;</Typography>
            <Button variant='outlined' type="button" size="small" onClick={() => setProduct(product + 1)}>+</Button>
          </div>
      </CardActions>
      <p1 className="pp1"> Storage status: 28 items in stock</p1>
    </Card>
  </div>
    
  <div class="bbox description-box"> 
  <Typography style={{fontSize:28}} variant="h4" gutterBottom component="div">Specifications</Typography>
    <table className="table">
      <tr>
        <td>Version</td>
        <td>ASUS Radeon RX 6700 XT STRIX OC</td>
      </tr>
      <tr>
        <td>Manufacturer</td>
        <td>AMD</td>
      </tr>
      <tr>
        <td>Origin</td>
        <td>Taiwan</td>
      </tr>
      <tr>
        <td>Shipped from</td>
        <td>Taiwan</td>
      </tr>
      <tr>
        <td>Hashrate (OC)</td>
        <td>47MH/s EtHash ±4%</td>
      </tr>
      <tr>
        <td>Power Consumption (OC)</td>
        <td>120W ±3%</td>
      </tr>
      <tr>
        <td>TDP</td>
        <td>230W ±6%</td>
      </tr>
      <tr>
        <td>Power Connectors</td>
        <td>1x 6-pin + 1x 8-pin</td>
      </tr>
      <tr>
        <td>Cores</td>
        <td>2560</td>
      </tr>
      <tr>
        <td>Memory Size</td>
        <td>12 GB</td>
      </tr>
      <tr>
        <td>Memory Type</td>
        <td>GDDR6</td>
      </tr>
      <tr>
        <td>Memory Bus</td>
        <td>192 bit</td>
      </tr>
    </table>
  </div> 
  </div>
  </div>
  );
}
export default RX6700XTDetails;