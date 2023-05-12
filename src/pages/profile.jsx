import TITLETAB from '../components/title_tab';
import TABPROFILE from '../components/profile/tab';
import CENTERTEXTPROFILE from '../components/profile/left_text';
import MAINTEXTPROFILE from '../components/profile/main_text';
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' ,}}>
      <TITLETAB />
      <TABPROFILE/>
      <CENTERTEXTPROFILE/>
      <MAINTEXTPROFILE/>
    </Box>
    </>
  );
};

export default Profile;
