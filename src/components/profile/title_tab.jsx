import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Title_Tab = () => {
  return (
    <>

      <Box sx={{ fontSize: '40px', position: 'absolute', top: "30px", left: "30px" }}>
        <Link to="./home" style={{ textDecoration: 'none', color: 'inherit' }}>
          HOME Page
        </Link>
      </Box>

    </>
  );
};

export default Title_Tab;