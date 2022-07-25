import React, { useState, useRef, useEffect } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import './Mailer.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Mailer = () => {

	const notify = ()=>{
		toast.success('Your message has been sent', {
		  // Set to 15sec
		  position: toast.POSITION.BOTTOM_LEFT, autoClose:10000})
	  }

	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
	  notify();
	  emailjs.sendForm('service_66zykbk', 'template_yx1pgqi', form.current, '5feBoBNiT8xMyyM-M')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};


    return(
		<div className="mccinheight" style={{paddingTop:"100px"}}> 
		
		<Grid >
		  <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
			<CardContent>
			  <Typography gutterBottom variant="h5">
				Contact Us
			</Typography> 
			  <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
				Fill up the form and our team will get back to you within 36 hours.
			</Typography> 
			  <form ref={form} onSubmit={sendEmail}>
				<Grid container spacing={1}>
				  <Grid xs={12} sm={6} item>

					<TextField name='from_name1' placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
				  </Grid>
				  <Grid xs={12} sm={6} item>
					<TextField name='from_name2' placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
				  </Grid>
				  <Grid item xs={12}>
					<TextField name='from_email' type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
				  </Grid>
				  <Grid item xs={12}>
					<TextField name='with_subject' type="text" placeholder="Enter subject matter" label="Subject" variant="outlined" fullWidth required />
				  </Grid>
				  <Grid item xs={12}>
					<TextField name='message' label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
				  </Grid>
				  <Grid item xs={12}>
					<Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
				  </Grid>
  
				</Grid>
			  </form>
			</CardContent>
		  </Card>
		</Grid>
	  </div>
    );
}

export default Mailer;