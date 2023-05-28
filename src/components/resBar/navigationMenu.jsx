import React from 'react';
import { IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationMenuItems from './navigationMenuItems';

const NavigationMenu = ({ isOpen, toggleDrawer, pages }) => {
  return (
    <>
      <IconButton
        edge="end"
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer(true)}
        color="black"
        sx={{ ml: 3 }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={isOpen}
        aria-label="メニュー"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#ffffff",
            color: "#ffffff",
          },
        }}
      >
        <NavigationMenuItems pages={pages} />
      </Drawer>
    </>
  );
};

export default NavigationMenu;
