import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Typical from "react-typical";

const Title_Tab = () => {
  return (
    <>

      <Box sx={{ fontSize: '40px', position: 'center', borderBottom: '1px solid' }}>
        profile
      </Box>
      <Box sx={{ fontSize: '15px', position: 'center', padding: '90px' }}>
        <p>私はてのん。人間のふりをしている。</p>
      </Box>

    </>
  );
};

export default Title_Tab;