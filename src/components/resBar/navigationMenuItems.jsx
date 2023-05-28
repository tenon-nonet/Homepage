import React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MENU from "./appBarResSub";

const NavigationMenuItems = ({ pages }) => {
  return (
    <>
      <MENU />
      <Box sx={{ marginTop: 8 }}>
        {pages.map((page) => {
          return ((page.link !== window.location.pathname) &&
            <MenuItem key={page.name} component={Link} to={page.link} >
              <Typography fontSize={"30px"} textAlign="center" style={{ marginTop: "10px" }} fontFamily={"sans-serif"} sx={{ color: "gray" }}>{page.name}</Typography>
            </MenuItem>)
        })}
      </Box>
    </>
  );
};

export default NavigationMenuItems;
