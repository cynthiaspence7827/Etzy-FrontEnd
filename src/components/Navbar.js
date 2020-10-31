import React, { useState } from 'react';
import { fade, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UserOptions from './UserOptions';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/authentication';
import AuthForm from './AuthForm';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up('md') ]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [ theme.breakpoints.up('md') ]: {
      display: 'none',
    },
  },
  mainbar: {
    background: theme.palette.background
  }
}));

const Navbar = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSignOut = async e => {
    handleMenuClose();
    await dispatch(logout());
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Account Settings</MenuItem>
      <MenuItem onClick={handleMenuClose}>Purchases and Reviews</MenuItem>
      <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="primary">
          <FavoriteIcon />
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="primary">
          <AssignmentIcon />
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="primary">
          <StorefrontIcon />
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <UserOptions />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: '#FFFAFA' }}>
        <Toolbar>
          <Avatar
            alt="etZy Icon"
            src="/images/android-chrome-512x512.png"
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button color="inherit">
              <AuthForm />
            </Button>
            <Button color="primary">
              <FavoriteIcon />
            </Button>
            <Button color="primary">
              <StorefrontIcon />
            </Button>
            <Button
              edge="end"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle color="primary" />
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <Button
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Navbar;


// import React, { useEffect, useRef, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, Avatar, Button, ButtonGroup, ClickAwayListener, Divider, Grow, MenuItem, MenuList, Paper, Popper } from '@material-ui/core';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { useSelector } from 'react-redux';
// import AuthForm from './AuthForm';
// import UserOptions from './UserOptions';

// const useStyles = makeStyles((theme) => ({
//   // navigation: {
//   //   backgroundColor: theme.palette.background,
//   //   display: 'flex',
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between'
//   // }
// }));

// const Navbar = (props) => {
//   const classes = useStyles();
//   const loggedIn = useSelector(state => state.authentication.loggedIn);

//   // const prevOpen = React.useRef(open);
//   // useEffect(() => {
//   //   if (prevOpen.current === true && open === false) {
//   //     anchorRef.current.focus();
//   //   }

//   //   prevOpen.current = open;
//   // }, [ open ]);

//   // const handleClose = () => {
//   //   setOpen(false);
//   // };

//   // const handleToggle = () => {
//   //   setOpen(!open);
//   // };

//   return (
//     <AppBar className="navigation" style={{ background: '#FFFAFA' }}>
//       { loggedIn ?
//         <>
//           <Avatar
//             alt="etZy Icon"
//             src="/images/android-chrome-512x512.png"
//           />
//           <FavoriteIcon color="primary" />
//           <Divider orientation="vertical" flexItem />
//           <StorefrontIcon color="primary" />
//           <Divider orientation="vertical" flexItem />
//           {/**User Options */}
//           <UserOptions />
//           <Divider orientation="vertical" flexItem />
//           <ShoppingCartIcon color="primary" />
//         </> :
//         <>
//           <Avatar
//             alt="EtZy Icon"
//             src="/images/android-chrome-512x512.png"
//           />
//           <ButtonGroup variant="text" color="primary">
//             <AuthForm />
//             <ShoppingCartIcon color="primary" />
//           </ButtonGroup>
//         </>
//       }
//     </AppBar>
//   );
// };

// export default Navbar;