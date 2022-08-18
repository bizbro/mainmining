import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart, Menu } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/LOGO.png';
import useStyles from './styles';
import NavbarDropdown from './NavbarDropdown';
import NavbarDropdown2 from './NavbarDropdown copy';

const PrimarySearchAppBar = ({ totalItems }) => {


  const classes = useStyles();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
        <div className="toggle-btn">
        <NavbarDropdown2/>
        <NavbarDropdown/>
         </div>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="MainMining" height="25px" className={classes.image} /> <div className='mmobileview'>MAIN MINING</div>
          </Typography>

          <div className={classes.title}>
            <div className='ccontent'>
              <Typography className='hhover-underline-animation' component={Link} to="/asicminers">Asic Miners</Typography>
              <Typography className='hhgover-underline-animation' component={Link} to="/graphicscards">Graphics Cards</Typography>
              <Typography className='hhjover-underline-animation' component={Link} to="/jasminers">Jasminers</Typography>
            </div>
          </div>

          <Typography className='trackorder' component={Link} to="/track">Track Order</Typography>

          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

      
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
