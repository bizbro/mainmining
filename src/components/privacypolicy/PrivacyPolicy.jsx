import React, { useEffect, useState } from "react";
import { Divider, Box, Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton, List, ListItem, ListItemIcon } from '@material-ui/core';
import Faq from "react-faq-component";
import "./PrivacyPolicy.css";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/icons/Link";
import RadioButtonChecked from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles(() => ({
  wrapIcon: {
    alignItems: "center",
    display: "flex"
  }
}));

const PrivacyPolicy = () => {
    const classes = useStyles();
  
    var link = <a href={('/contact')} style={{ color: "blue" }}>contact us</a>;
    return(
        <div className='mgaboutheight'>
            <Typography className='headingaboutus' variant="h4" gutterBottom component="div">
                Privacy policy
            </Typography>

        <div className='rrow'>
            <div className='aboutuscontainer'>

                
                <Typography  style={{ display: "inline-block", whiteSpace: "pre-line" }} variant="subtitle1" gutterBottom component="div">
                <Typography >
                    This Privacy Policy describes how MainMining.com (the “Site” or “we”) collects, uses, 
                    and discloses your Personal Information when you visit or make a purchase from the Site.
                </Typography>
                <div className='aboutusspacing'/>
                <Divider/>
                        <div className='aboutusspacing'/>
                    <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Collecting Personal Information</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                When you visit the MainMining.com, we collect certain information about your device, 
                                your interaction with the site, and information necessary to process your purchases. 
                                We may also collect additional information if you contact us for customer support. 
                                In this Privacy Policy, we refer to any information about an identifiable individual 
                                (including the information below) as “Personal Information”. 
                                See the list below for more information about what Personal Information we collect and why.
                            </Typography>

                            <div className='aboutusspacing'/>

                            <div>
                            <Grid container sx={{ color: 'text.primary' }}>

                                <Grid item xs={1}>
                                <RadioButtonChecked fontSize="small" />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <Typography style={{fontWeight: 'bold'}}>Purpose of collection:</Typography>
                                        To provide products or services to you to fulfill our contract, 
                                        to process your payment information, arrange for shipping, 
                                        and provide you with invoices and/or order confirmations, 
                                        communicate with you, screen our orders for potential risk or fraud, 
                                        and when in line with the preferences you have shared with us, 
                                        provide you with information or advertising relating to our products or services.
                                    </Typography>
                                </Grid>

                                <Grid item xs={1}>
                                <RadioButtonChecked fontSize="small" />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <Typography style={{fontWeight: 'bold'}}>Data disclosure:</Typography>
                                        Shared with our processor.
                                    </Typography>
                                </Grid>

                                <Grid item xs={1}>
                                <RadioButtonChecked fontSize="small" />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <Typography style={{fontWeight: 'bold'}}>Personal Information collected:</Typography>
                                        Name, billing address, shipping address. We also collect the current version of your web browser, 
                                        IP address, time zone, cookie information, what products you view, and how you interact with the site.
                                    </Typography>
                                </Grid>

                            </Grid>
                            </div>
                        </div>

                        <Divider/>
                        <div className='aboutusspacing'/>

                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Minors</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                The Site is not intended for individuals under the age of 18. 
                                We do not intentionally collect Personal Information from children. 
                                If you are the parent or guardian and believe your child has provided us with Personal Information, 
                                please {link} to request  of erasement.
                            </Typography>
                        </div>

                        <Divider/>
                        <div className='aboutusspacing'/>

                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Lawful basis</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                Pursuant to the General Data Protection Regulation (“GDPR”), if you are a resident of the European Economic Area (“EEA”), 
                                we process your personal information under the following lawful bases:
                            </Typography>
                        </div>
                        <div className='aboutusspacing'/>

                        <div>
                        <Grid container sx={{ color: 'text.primary' }}>

                            <Grid item xs={1}>
                            <RadioButtonChecked fontSize="small" />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography>
                                    Compliance with our legal obligations;
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                            <RadioButtonChecked fontSize="small" />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography>
                                    To protect your vital interests;
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                            <RadioButtonChecked fontSize="small" />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography>
                                    To perform a task carried out in the public interest;
                                </Typography>
                            </Grid>

                            <Grid item xs={1}>
                            <RadioButtonChecked fontSize="small" />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography>
                                    For our legitimate interests, which do not override your fundamental rights and freedoms.
                                </Typography>
                            </Grid>

                        </Grid>
                        </div>

                        <div className='aboutusspacing'/>
                        <Divider/>
                        <div className='aboutusspacing'/>

                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Retention</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                When you place an order through the Site, we will retain your Personal Information
                                for our records unless and until you ask us to erase this information. 
                                For more information on your right of erasure, please see the ‘Your rights’ section below.
                            </Typography>
                        </div>

                        <Divider/>
                        <div className='aboutusspacing'/>

                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Your rights</Typography>
                        <div className='aboutusspacing'/>
                        <div>
                            <Grid container sx={{ color: 'text.primary' }}>

                                <Grid item xs={1}>
                                <RadioButtonChecked fontSize="small" />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <Typography style={{fontWeight: 'bold'}}>GDPR:</Typography>
                                        If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, 
                                        to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. 
                                        If you would like to exercise these rights, please contact us through the contact information above. 
                                        
                                        Your Personal Information will be initially processed in Ireland and then will be transferred outside of Europe 
                                        for storage and further processing, including to Canada and the United States.
                                    </Typography>
                                </Grid>

                                <Grid item xs={1}>
                                <RadioButtonChecked fontSize="small" />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography>
                                        <Typography style={{fontWeight: 'bold'}}>CCPA:</Typography>
                                        If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the ‘Right to Know’), 
                                        to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. 
                                        If you would like to exercise these rights, please {link}.
                                    </Typography>
                                </Grid>

                            </Grid>
                            </div>
                        
                        <div className='aboutusspacing'/>
                        <Divider/>
                        <div className='aboutusspacing'/>

                        <Typography variant="h7" component="h3" style={{fontWeight: 'bold'}}>Cookies</Typography>
                        <div className='aboutusspacing'>
                            <Typography>                    
                                A cookie is a small amount of information that may be downloaded to your computer or device when you visit our site. 
                                We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. 
                                Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). 
                                This means you don't have to re-enter this information each time you return to the site or browse from one page to another. 
                                Cookies also provide information on how people use the website, for instance whether it's their first time visiting or if they are a frequent visitor.
                            </Typography>
                        </div>

                </Typography>
            </div>
        </div>
      </div>
    )
}

export default PrivacyPolicy;