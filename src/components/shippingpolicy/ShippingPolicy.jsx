import React, { useEffect, useState } from "react";
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Faq from "react-faq-component";
import "./ShippingPolicy.css";

const ShippingPolicy = () => {  
    var link = <a href={('/contact')} style={{ color: "blue" }}>contact us</a>;
    return(
        <div className='mgaboutheight'>
            <Typography className='headingaboutus' variant="h4" gutterBottom component="div">
                Shipping policy
            </Typography>

        <div className='rrow'>
            <div className='aboutuscontainer'>
                <Typography  style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                    
                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Shipping policy</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                All orders are processed within 1 to 4 business days (excluding weekends and holidays) 
                                after receiving your order confirmation email. 
                                You will receive another notification once your order has been shipped. 
                            </Typography>
                        </div>
                        <Divider/>
                        <div className='aboutusspacing'/>
                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>How do I check the status of my order?</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                When your order has been shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. 
                                Please allow 48 hours for the tracking information to become available. If you haven't received your order within 7 days of receiving your shipping confirmation email, 
                                please {link} with your name and order number, and we will look into it for you.
                            </Typography>
                        </div>
                        <Divider/>
                        <div className='aboutusspacing'/>
                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Refunds, returns, and exchanges</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                We accept returns up to 30 days after delivery, if the item is unused and in its original condition, 
                                and we will refund the full order amount minus the shipping costs for the return. 
                            </Typography>
                        </div>
                        <div >
                            <Typography>                    
                                In the event that your item arrives in a damaged state, please {link} as soon as possible with your 
                                order number and a photo of the item's condition. 
                                We address these on a case-by-case basis but will try our best to work towards a satisfactory solution.
                            </Typography>
                        </div>
                        <div className='aboutusspacing'/>
                        <div >
                            <Typography>                    
                                If you have any further questions, please don't hesitate to {link}
                            </Typography>
                        </div>
                </Typography>
            </div>
        </div>
      </div>
    )
}

export default ShippingPolicy;