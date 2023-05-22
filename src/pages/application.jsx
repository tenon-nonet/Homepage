
import LEFTEXTAPPLICATION from '../components/left_text';
import MAINTEXTAPPLICATION from '../components/application/main_text';
import APPBARRESPRO from '../components/appBarRes';
import FOOTER from '../components/footer';
import { Box } from '@mui/material';

const Application = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LEFTEXTAPPLICATION content="Applications" />
      <MAINTEXTAPPLICATION />
      <APPBARRESPRO />
      <FOOTER />
    </Box>
  );
};

export default Application;