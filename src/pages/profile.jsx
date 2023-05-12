import HIDEAPPBAR from '../components/profile/hideAppBarPro';
import APPBARRESPRO from '../components/appBarRes';

import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' ,}}>
      <HIDEAPPBAR/>
      <APPBARRESPRO/>
    </Box>
    </>
  );
};

export default Profile;
