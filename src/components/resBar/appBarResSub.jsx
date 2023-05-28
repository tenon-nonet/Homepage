import { AppBar, Toolbar, Typography, Container, CardMedia } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import witchA from "../../assets/img/witch/witchA.webp";

function ResponsiveAppBarSub() {
  return (
    <AppBar position="fixed" top="0px" sx={{ background: "white" }} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CardMedia component="img" image={witchA} alt="MyLogo" style={{ width: "50px", marginRight: "10px" }} />
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
            HOME
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBarSub;
