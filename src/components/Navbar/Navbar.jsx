import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/LOGO.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} 
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
    id={mobileMenuId} keepMounted 
    transformOrigin={{ vertical: 'top', horizontal: 'right' }} 
    open={isMobileMenuOpen} 
    onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="MainMining" height="25px" className={classes.image} /> MAIN MINING
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
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
