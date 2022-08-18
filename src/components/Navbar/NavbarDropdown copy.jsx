import { ShoppingCart, Menu } from '@material-ui/icons';
import * as ReactDom from 'react-dom';
import React, { useState } from "react"
import { NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { Link  } from 'react-router-dom';

const NavbarDropdown2 = () => {


    const [open, setOpen] = React.useState(false);

    

    return(

            <div className="dropdcontainer">

            <div >
                <ul>
                <li>
                <Typography component={Link} to="/asicminers">Asic Miners</Typography>
                </li>
                <li>
                <Typography component={Link} to="/graphicscards">Graphics Cards</Typography>
                </li>
                </ul>
            </div>
            </div>
    );

}

export default NavbarDropdown2;