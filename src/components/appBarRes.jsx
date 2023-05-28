import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button, CardMedia, useMediaQuery } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import witchC from "../assets/img/witch/witchC.webp";
import NavigationMenu from './resBar/navigationMenu';

const pages = [
  { name: 'profile', link: '/profile' },
  { name: 'application', link: '/application' },
  { name: 'skills', link: '/playground' },
];

function ResponsiveAppBar() {
  const isSmallScreen = useMediaQuery("(max-width:899px)");
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => () => setIsOpen(open);

  return (
    <AppBar position="fixed" top="0px" sx={{ background: "white" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardMedia component="img" image={witchC} alt="MyLogo" style={{ width: "50px", marginRight: "10px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="../"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            HOMEPage
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="../"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            HOMEPage
          </Typography>

          {isSmallScreen && (
            <NavigationMenu isOpen={isOpen} toggleDrawer={toggleDrawer} pages={pages} />
          )}

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                sx={{ my: 2, color: 'black', display: 'block' }}
                component={Link}
                to={page.link}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
