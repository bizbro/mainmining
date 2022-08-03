import * as React from 'react';
import { useState, useEffect } from 'react';
import './TrackOrder.css';
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import ReactLoading from "react-loading";

import TrackOrder from './TrackOrder';
import LOGO from "./../../assets/LOGO.png"
import { margin, textAlign, width } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const PackageNotFound  = (props)  => {  

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 7000)
  }, [])

  return (
    <>
    {loading === false ? (
    
    <div className='mninheight'>
      <Typography className='htitle' style={{fontSize:37}} variant="h4" gutterBottom component="div">Package tracking</Typography>
        <div class="cccontainer" style={{ display: "flex", alignItems: "baseline" }}>
          <Typography>
            <img className='photo' src='../images/arrivals/404.png'/>
            <Typography variant="h5" gutterBottom component="div">Order number</Typography>
            <Box variant="h5" component="h2">"{props.text}"</Box>
            <Typography variant="h5" gutterBottom component="div">could not be identified.</Typography>
            <Typography variant="h6" gutterBottom component="div">Please check for spelling mistakes or contact us.</Typography>
            
          </Typography>
        </div>
    </div>
            ) : (
              <div>
              <img className="loadingbrologo" src={LOGO} alt="MainMining" height="25px" />
              <ReactLoading className="loadingbro" color='#ffcd4e' type="spin" height={140} width={80} />
              </div>
              )}
    </>
  );
}
export default PackageNotFound;