import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import React from 'react';
import "./AboutUs.css";
const AboutUs = () => {  
    return(
        <div className='mgaboutheight'>
            <Typography className='headingaboutus' variant="h4" gutterBottom component="div">
                About us
            </Typography>
<div className='rrow'>

            <div className='aboutuscontainer'>
                <Typography style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                    MainMining was formed by the two taiwanese data engineers Chih-Wei Liao and Wen-Hsiung Jiang in august 2017. 
                    Since then, MainMining have gone from being a national retailer for cryptocurrency mining hardware, 
                    to proudly being able to perform worldwide deliveries in early 2022. 
            <div className='ccolumn'>
                <img src='../images/flash/CEOs lul.png'/>
            </div>
                    Exceptional partnerships have been formed over the years with various ASIC producers such as Bitmain and Goldshell.
                    Therefore, with continuous friendships and close ties with our producers, MainMining have
                    effectively become a top retailer of various cryptocurrency mining hardware to affordable prices. 
                    <div className='aboutusspacing'></div>
                    <Divider/>
                    <div className='aboutusspacing'>
                    <Typography>                    
                    We are an innovative company and see ourselves as bridge builders to the revolutionary technology of cryptocurrency.
                    And as of december 2020, we have begun taking cryptocurrency as the default payment method for our products. 
                    </Typography>
                    </div>
                    <Divider/>
                    <div className='aboutusspacing'>
                    <Typography>   
                    We are your consultant and partner, and we are available as a professional contact for both beginners and professionals.
                    <Typography>Happy Mining!</Typography>
                    <Typography>- Liao & Jiang</Typography>
                    
                    </Typography>   
                    </div>
                </Typography>
            </div>
</div>
      </div>
    )
}

export default AboutUs;