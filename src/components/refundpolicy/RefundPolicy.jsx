import React, { useEffect, useState } from "react";
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import Faq from "react-faq-component";
import "./RefundPolicy.css";

const RefundPolicy = () => {  
    var link = <a href={('/contact')} style={{ color: "blue" }}>contact us</a>;
    return(
        <div className='mgaboutheight'>
            <Typography className='headingaboutus' variant="h4" gutterBottom component="div">
                Refund policy
            </Typography>

        <div className='rrow'>
            <div className='aboutuscontainer'>
                <Typography  style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                    
                    
                        <div className='aboutusspacing'/>
                            <Typography>                    
                                We have a 30-day return policy, which means you have 30 days to request a product return after initially receiving your product.
                            </Typography>

                        <div className='aboutusspacing'/>
                            <Typography>                    
                                To be eligible for a return, your item must be in the same condition as it was when you initially received it, 
                                unused, with tags, and in its original packaging. You'll also need the receipt or proof of purchase.
                            </Typography>     

                        <div className='aboutusspacing'/>
                            <Typography>                    
                                To start a return, you can {link}. If your return is accepted, we'll send you a return shipping label, 
                                as well as instructions on how and where to send your package. 
                                Items sent back to us without first requesting a return will not be accepted.
                            </Typography>  

                        <div className='aboutusspacing'/> 
                            <Typography>                    
                                IMPORTANT: Products sent back to us without first requesting a return will NOT be accepted.
                            </Typography>                          
                        
                        <div className='aboutusspacing'/>
                        <Divider/>

                        <div className='aboutusspacing'/>
                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Damages and issues</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Please inspect your item upon arrival and {link} immediately if the item is defective, 
                                damaged or if you received the wrong item, so that we can evaluate the issue and make it right.
                            </Typography>
                        </div>
                        <Divider/>
                        <div className='aboutusspacing'/>
                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Exceptions / non-returnable items</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Certain types of items cannot be returned, like custom products (such as special orders or personalized items).
                            <Typography>  
                                We also do not accept returns for hazardous materials, flammable liquids, or gases. 
                            <Typography>                    
                                We do not accept refunds on gift cards.
                            </Typography>  
                        <div className='aboutusspacing'/>   
                            </Typography>
                                Please get in touch if you have questions or concerns about your specific item.
                            </Typography>       
                        </div>

                        <div className='aboutusspacing'/> 
                        <Divider/>
                        <div className='aboutusspacing'/>
                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Warranty</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                All products have 547 days of warranty (1.5 years).
                            </Typography>
                        </div>

                        <div className='aboutusspacing'/>
                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Upon product return</Typography>
                        <div className='aboutusspacing'/>
                            <Typography>                    
                                We will notify you once we have received and inspected your returned item, and will let you know if the refund was approved or not. 
                                If approved, you will be automatically refunded on your original payment method. 
                            </Typography>
                        <div className='aboutusspacing'/>

                        
                </Typography>
            </div>
        </div>
      </div>
    )
}

export default RefundPolicy;