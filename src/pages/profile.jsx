import LEFTEXTAPPLICATION from '../components/left_text';
import APPBARRESPRO from '../components/appBarRes';
import MAINTEXT from '../components/profile/main_text'
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <APPBARRESPRO />
        <LEFTEXTAPPLICATION content="Profile"/>
        <MAINTEXT/>
      </Box>
    </>
  );
};

export default Profile;
