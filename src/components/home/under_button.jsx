import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Under_Button = () => {

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
      <Link to="./profile" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="h5" sx={{ borderBottom: '1px solid' }}>profile</Typography>
      </Link>
      <Box sx={{ width: 50 }} />
      <Link to="./application" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="h5" sx={{ borderBottom: '1px solid' }}>application</Typography>
      </Link>
      <Box sx={{ width: 50 }} />
      <Link to="./playground" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Typography variant="h5" sx={{ borderBottom: '1px solid' }}>playground</Typography>
      </Link>
    </Box >
        </>
    );
};

export default Under_Button;

