import LEFTEXTAPPLICATION from '../components/profile/left_text';
import APPBARRESPRO from '../components/appBarRes';
import MAINTEXT from '../components/profile/main_text'
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <APPBARRESPRO />
        <LEFTEXTAPPLICATION />
        <MAINTEXT/>
      </Box>
    </>
  );
};

export default Profile;
