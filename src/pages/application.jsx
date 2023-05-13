// import TITLETAB from '../components/title_tab';
// import TABAPPLICATION from '../components/application/tab';
import CENTERTEXTAPPLICATION from '../components/application/left_text';
import MAINTEXTAPPLICATION from '../components/application/main_text';
import APPBARRESPRO from '../components/appBarRes';
import CENTEREDTABSAPP from '../components/application/tab';
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* <TITLETAB /> */}
      {/* <TABAPPLICATION/> */}
      <CENTERTEXTAPPLICATION/>
      <MAINTEXTAPPLICATION/>
      <APPBARRESPRO/>
      <CENTEREDTABSAPP/>
    </Box>
    </>
  );
};

export default Profile;