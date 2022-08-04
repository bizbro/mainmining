import * as React from 'react';
import {Typography, Box, Divider, Link} from '@material-ui/core';
import "./Footer.css";
import { useLocation } from "react-router-dom";


function Footer () {

  const { pathname } = useLocation();

  if (pathname === "/track/orderstatus") return null;
  if (pathname === "/cart") return null;
  if (pathname === "/checkout") return null;

  return (
    <section className="footer">
      <hr className="footer-seperator" />
      {/* <section className="footer-social-media">
        <a href="/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </section> */}
      <section className="footer-info">

        <section className="footer-info-left">
            <section className="footer-info__headerstart">
                <h4>Information</h4>
            </section>
            <Link class="hover-underline-animation" href={"/about"} underline="none" color='inherit'>
              <Typography className="typographystart">About us</Typography>
            </Link>
            <Link class="hcover-underline-animation" href={"/contact"} underline="none" color='inherit'>
              <Typography className="typographystart">Contact us</Typography>
            </Link>
            <Link class="hfover-underline-animation" href={"/faq"} underline="none" color='inherit'>
              <Typography className="typographystart">FAQ</Typography>      
            </Link>
        </section>

        <section className="footer-info-center">
            <section className="footer-info__headercenter">
                <h4>Partnerships</h4>
            </section>
            <Typography className="typographycenter">Bitmain</Typography>
            <Typography className="typographycenter">Goldshell</Typography>
            <Typography className="typographycenter">Jasminer</Typography>
            <Typography className="typographycenter">Nvidia (bulk-order partner)</Typography>
            <Typography className="typographycenter">AMD (bulk-order partner)</Typography>
        </section>

        <section className="footer-info-right">
            <section className="footer-info__headerend">
                <h4>Services</h4>
            </section>
            <Link class="shipping-underline-animation" href={"/shipping-policy"} underline="none" color='inherit'>
              <Typography className="typographyend">Shipping</Typography>
            </Link>
            <Link class="privacy-underline-animation" href={"/privacy-policy"} underline="none" color='inherit'>
              <Typography className="typographyend">Privacy</Typography>
            </Link>
            <Link class="refund-underline-animation" href={"/refund-policy"} underline="none" color='inherit'>
              <Typography className="typographyend">Refund</Typography>      
            </Link>
            <Link class="tos-underline-animation" href={"/terms-of-service"} underline="none" color='inherit'>
              <Typography className="typographyend">Terms of Service</Typography>      
            </Link>
        </section>

      </section>
      <hr className="footer-seperator" />

      <Box sx={{bgcolor: '#9797973f', color: 'background.paper', p: 2 }}>
        <Typography className='fontsizelowerfooter' gutterBottom style={{ margin: '0px 0' }}>© MainMining Innovation Holding AS 2022
        </Typography>
      </Box> 
    </section>
    
  )

}

export default Footer;

// export default function Footer() {
//     var loc = "/Support";

//   return (
//     <div class="fcontainer" id="footer">

//         <div className='fbox'>
//         <Typography>About us</Typography>
//         </div>

//         <Link href={loc} underline="none" color='inherit'>
//         <div className='fbox'>
//         <Typography>Contact us</Typography>
//         </div>
//         </Link>
        
//         <div className='fbox'>
//         <Typography>Partners</Typography>
//         </div>

//     </div>
//   );
// }