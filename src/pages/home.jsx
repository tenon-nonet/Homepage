import CENTERTEXT from '../components/home/center_text';
import UNDERBUTTON from '../components/home/under_button';
import APPBARRESPRO from '../components/appBarRes';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CENTERTEXT />
        <UNDERBUTTON />
        <APPBARRESPRO/>
      </Box>
    </>
  )
};

export default Home;