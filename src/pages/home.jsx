import CENTERTEXT from '../components/home/center_text';
import UNDERBUTTON from '../components/home/under_button';
import HOMEBAR from '../components/home/bar';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CENTERTEXT />
        <UNDERBUTTON />
        <HOMEBAR/>
      </Box>
    </>
  )
};

export default Home;