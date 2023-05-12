import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Under_Button = () => {

  return (
    <>
      <Box display="flex" alignItems="center" >
        <Box sx={{ position: 'absolute', top: "50px", left: "400px", borderBottom: '1px solid', pb: 1, mr: 2 }}>
          <Link to="../profile" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6">profile</Typography>
          </Link>
        </Box>
        <Box sx={{ position: 'absolute', top: "50px", left: "500px", borderBottom: '1px solid', pb: 1, mr: 2, color: 'grey' }}>
          <Typography variant="h6">application</Typography>
        </Box>
        <Box sx={{ position: 'absolute', top: "50px", left: "640px", borderBottom: '1px solid', pb: 1, mr: 2, }}>
          <Link to="../playground" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6">playground</Typography>
          </Link>
        </Box>
      </Box>    </>
  );
};

export default Under_Button;
