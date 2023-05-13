import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Homebar = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: "black" }}>
      <Toolbar variant="dense" >
        <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }} style={{ backgroundColor: "green", color: "white", }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          TENONIFY
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Homebar;