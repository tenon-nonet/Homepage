import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Under_Button = () => {

  return (
    <>
      <Box display="flex" alignItems="center" >
        <Box sx={{ position: 'absolute', top: "50px", left: "500px" ,borderBottom: '1px solid', pb: 1, mr: 2 }}>
        <Link to="../application" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6">application</Typography>
          </Link>
        </Box>
        <Box sx={{ position: 'absolute', top: "50px", left: "750px", borderBottom: '1px solid', pb: 1, mr: 2 }}>
        <Link to="../playground" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6">playground</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Under_Button;
