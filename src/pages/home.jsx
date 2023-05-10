import CENTERTEXT from '../components/home/center_text';
import UNDERBUTTON from '../components/home/under_button';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CENTERTEXT />
        <UNDERBUTTON />
      </Box>
    </>
  )
};

export default Home;