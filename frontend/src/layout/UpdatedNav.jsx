import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

import homeLogo from '../assets/img/home-button.png';
import menuLogo from '../assets/img/burger-button.png';
import useStyles from './style';


export const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [burgerShow, setBurgerShow] = useState(null);
  const classes = useStyles()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            component={Link}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={homeLogo} alt="homeLogo" className={classes.image} />
          </IconButton>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/concept">Hvad er Århus Duck Race?</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/buy">Køb din and her</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/donate">Donér til os her</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/event">Hvor foregår det?</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/prizes">Præmier</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/purpose">Formål</Typography>
          </MenuItem>
          <MenuItem className={classes.menuItem}>
            <Typography className={classes.linkNav} component={Link} to="/aboutus">Om os</Typography>
          </MenuItem>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
            <div className={classes.hideBurger}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <img src={menuLogo} alt="MenuLogo" className={classes.image} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/concept" onClick={handleClose}>Hvad er Århus Duck Race?</MenuItem>
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/buy" onClick={handleClose}>Køb din and her</MenuItem>
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/donate" onClick={handleClose}>Donér til os her</MenuItem>
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/event" onClick={handleClose}>Hvor foregår det?</MenuItem>
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/prizes" onClick={handleClose}>Præmier</MenuItem>
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/purpose" onClick={handleClose}>Formål</MenuItem>
                <MenuItem style={{backgroundColor: "#FCE7A4"}} component={Link} to="/about-us" onClick={handleClose}>Om os</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
