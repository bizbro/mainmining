import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

const FeaturedAlgorithms = () => {
    return (
        <div className="ssliderhomepage">
<Typography className='ccdwenter' style={{fontSize:40}} variant="h4" gutterBottom component="div">Featured Algorithms</Typography>

        <div id="algoimages" class="algorow">
              <div class="algocolumn">
                <img src='./images/algos/sha256.png'/>        
            </div>
            <div class="algocolumn">
                <img src='./images/algos/ETHash.png'/>
            </div>
            <div class="algocolumn">
                <img src='./images/algos/kda.png'/>
            </div>
            <div class="algocolumn">
                <img src='./images/algos/Scrypt.png'/>
            </div>

        </div>
        </div>

    )
  }
  
  export default FeaturedAlgorithms