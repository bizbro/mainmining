import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './TrackOrder.css';
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton, Link } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { margin, textAlign, width } from '@mui/system';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const TrackOrder = (props) => {  


  const [enteredText, setEnteredText] = useState("");

  let history = useNavigate();

  const textChangeHandler = (i) => {
    setEnteredText(i.target.value);
    //console.log(i.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.text(enteredText);
    setEnteredText("");
    history.push("/track/orderstatus");

  };
  var loc = "/contact";
  return (
    <div className='mminheight'>
      <Typography className='htitle' style={{fontSize:37}} variant="h4" gutterBottom component="div">Package tracking</Typography>
        <div class="cccontainer">
          <Typography id="Overflow" variant="h5" component="h2">
          Enter the tracking number received in your email order confirmation
          </Typography>
            <div>
              <form class="example" action="" onSubmit={submitHandler}>
                <input value={enteredText} type="text" placeholder="Enter tracking number.." name="search" onChange={textChangeHandler}/>
                <button type="submit"><i class="fa fa-search"></i>Search</button>
              </form>
            </div>
          <Link href={loc} underline="none" color='inherit'>
          <Typography className='notreceived' variant="h6" component="h2" display="inline">
          I have not received a tracking number
          </Typography>
          </Link>
        </div>
    </div>
  );
}
export default TrackOrder;

