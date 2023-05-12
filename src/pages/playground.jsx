// import TITLETAB from '../components/title_tab';
// import TABPLAYGROUND from '../components/playground/tab';
import CENTERTEXTPLAYGROUND from '../components/playground/left_text';
import MAINTEXTPLAYGROUND from '../components/playground/main_text';
import APPBARRESPRO from '../components/appBarRes';
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* <TITLETAB />
      <TABPLAYGROUND/> */}
      <CENTERTEXTPLAYGROUND/>
      <MAINTEXTPLAYGROUND/>
      <APPBARRESPRO/>
    </Box>
    </>
  );
};

export default Profile;