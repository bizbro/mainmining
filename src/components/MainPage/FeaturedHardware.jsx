import React from "react"
import Categories from "./Categories"
import "./Home.css"
import SliderHome from "./Slider"
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';

const FeaturedHardware = () => {
    return (
        <div>
<Typography className='ccenter' style={{fontSize:40}} variant="h4" gutterBottom component="div">Featured Hardware</Typography>

        <div id="algoimages" class="algorow">
            <div class="hardwarecolumn">
                <img src='./images/hardware/Jasminer.png'/>
            </div>
            <div class="hardwarecolumn">
                <img src='./images/hardware/Antminer.png'/>
            </div>
            <div class="hardwarecolumn">
                <img src='./images/hardware/Gpus.png'/>
            </div>
        </div>
        </div>

    )
  }
  
  export default FeaturedHardware