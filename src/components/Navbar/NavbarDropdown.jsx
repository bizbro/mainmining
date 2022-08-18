import { ShoppingCart, Menu } from '@material-ui/icons';
import * as ReactDom from 'react-dom';
import React, { useState } from "react"
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NavbarDropdown = () => {


    const [open, setOpen] = React.useState(false);

    

    return(

            <div className="dropdcontainer">

            <div >
                <ul>
                <li>
                    <Typography component={Link} to="/jasminers">Jasminers</Typography>
                </li>
                <li>
                    <Typography component={Link} to="/track">Track Order</Typography>
                </li>
                </ul>
            </div>
            </div>
    );

}

export default NavbarDropdown;