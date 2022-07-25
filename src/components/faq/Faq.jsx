import React, { useEffect, useState } from "react";
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Faq from "react-faq-component";
import "./Faq.css";
const data = {
    
    rows: [
        {
            title: "What shipping method do you use?",
            content:
            <Typography style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                We have been using DHL exclusively for the last 2 years. DHL have proven to ship our products fast, safe and with good care. 
            </Typography>
        },
        {
            title: "How long will it take before I get my package?",
            content:
              <Typography style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                  The Corona pandemic caused major issues for us with regards to shipping and delivery back in 2020/21, but as how of the situation is now, your product should be delivered between 1 and 2 weeks after shipping.
              </Typography>
        },
        {
            title: "Do you ship internationally?",
            content: 
            <Typography style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                Yes. MainMining proudly announcounced in early 2022 that worldwide delivery is supported.
            </Typography>
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    display: "inline-block",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    
    // arrowIcon: "V",
    // tabFocus: true
};

function Faquestions () {

  return (



<div className='mgaboutheight'>
<Typography className='headingaboutus' variant="h4" gutterBottom component="div">
    Frequently Asked Questions
</Typography>
<div className='rrow'>

<div className='aboutuscontainer'>

    <Faq
        data={data}
        styles={styles}
        config={config}
    />

</div>
</div>
</div>
    )

}

export default Faquestions;