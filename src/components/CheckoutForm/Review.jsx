import React from 'react';
import { Typography, List, ListItem, ListItemText, Divider, Box, TextField } from '@material-ui/core';
import { padding, palette } from '@mui/system';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {FaRegCopy, FaRegClipboard} from 'react-icons';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './Checkout.css';
const Review  = ({ checkoutToken })  => {  
  const [ethPrice, setEthPrice] = useState(null);
  

  useEffect(() => {
    Axios.get('https://api.coinbase.com/v2/exchange-rates?currency=ETH').then((response)=>{setEthPrice(parseFloat(response.data.data.rates.USD.replace(/,/g, "")).toFixed(3))});
    
    //{console.log("response: ",parseFloat(response.data.data.rates.USD.replace(/,/g, "").toFixed(3)))});
    //.then((response) => {setBtcPrice(parseFloat(response.data.bpi.USD.rate.replace(/,/g, "")).toFixed(3))});
    //Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {console.log("response: ", parseFloat(response.data.bpi.USD.rate.replace(/,/g, ".")).toFixed(4))});
  },[]);


  const price = () => {
    // console.log("btc price: ", typeof(btcPrice));
    // console.log("btc price: ", btcPrice);

    //var bitcoin = btcPrice.replace(/./, "");
    let ethereum = parseInt(ethPrice);
    console.log("btc: ", ethereum)

    //var l = parseInt(checkoutToken.live.subtotal.formatted_with_symbol) / btcPrice;
    let token = checkoutToken.live.subtotal.formatted.replace(/,/g, "");
    let token2 = parseInt(token);
    //let token = checkoutToken.live.subtotal;
    console.log("token: ", token2)


    // var b = checkoutToken.live.subtotal.formatted_with_symbol.slice(1, 6);
    // var c = parseFloat(b.replace(/,/g, "")).toFixed(4);
    // var d = parseInt(c);

    // console.log("token: ", d)
    // console.log("type token: ", typeof(d));
    return(token2/ethereum);
  }

  const [addressCopied, setAddressCopied] = useState(false);
  const [priceCopied, setPriceCopied] = useState(false);

  const ethAddress = "0xD67c943aa167Ba16E66c4b3485f35272584A3F46";
  const itemPrice = price().toFixed(2)+"236";

  const copyPriceToClipboard = () => {
    navigator.clipboard.writeText(itemPrice).then(
      () => {
        setPriceCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setPriceCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(ethAddress).then(
      () => {
        setAddressCopied(true);
        // changing back to default state after 2 seconds.
        setTimeout(() => {
          setAddressCopied(false);
        }, 2000);
      },
      (err) => {
        console.log("failed to copy", err.mesage);
      }
    );
  };
  const btnStyle1 = addressCopied ? "bg-gray-500 text-white" : "";
  const btnStyle2 = priceCopied ? "bg-gray-500 text-white" : "";
  return (
    <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol} = {price().toFixed(2)} Ethereum
        </Typography>
      </ListItem>
    </List>

    <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '23px 0' }}>Payment method</Typography>
      <Box className='boxedpay' sx={{bgcolor: '#fae98a93', color: 'background.paper', p: 2 }}>
        <Typography className='fffffffffffffffffffffontsize' gutterBottom style={{ margin: '0px 0' }}>0xD67c943aa167Ba16E66c4b3485f35272584A3F46
        
        <div>
            <button
            onClick={copyAddressToClipboard}
            className='butto3n4'
          >
            {addressCopied ? "Copied" : "Copy address"}
          </button>
        </div>
        </Typography>
      </Box> 
      <Typography className='fpfontsize' variant="h7" gutterBottom style={{ margin: '5px 0' }}>Transfer {price().toFixed(2)}236 Ethereum to the Ethereum address above</Typography>
      
      <Box className='boxedpayed' sx={{bgcolor: '#fae98a93', color: 'background.paper', p: 2 }}>
        <Typography className='fffffffffffffffffffffontsize' gutterBottom style={{ margin: '0px 0' }}>{price().toFixed(2)}236 <h9>ETH</h9>
      <div>
            <button
            onClick={copyPriceToClipboard}
            className='butto3n4'
          >
            {priceCopied ? "Copied" : "Copy price"}
          </button>
            
        </div>
        </Typography>
      </Box> 
      
      
    <Divider />
    <div className='divayed'></div>
      <Typography className='fffffffffffffffffffffontsize'>NB:</Typography>
      <Typography variant="h9" display="block" gutterBottom style={{ margin: '5px 0' }}>The ETH decimals will be used to track this order up against your shipping information.</Typography>
      <Typography variant="h9" display="block" gutterBottom style={{ margin: '5px 0' }}>If you did not enter the correct Ethereum decimal values, please contact us.</Typography>
      <div className='divayed'></div>
    <Divider />
      <Typography className='paaaadddingLUL' variant="h9" display="block" gutterBottom style={{ margin: '1px 0' }}>You will receive an email with order confirmation</Typography>
      <Typography variant="h9" display="block" gutterBottom style={{ margin: '1px 0' }}>and your item's shipping information upon successful transfer.</Typography>

  </>
  );
}
export default Review;
