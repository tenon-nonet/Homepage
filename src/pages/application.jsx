import TITLETABAPPLICATION from '../components/application/title_tab';
import TABAPPLICATION from '../components/application/tab';
import CENTERTEXTAPPLICATION from '../components/application/left_text';
import MAINTEXTAPPLICATION from '../components/application/main_text';
import { Box } from '@mui/material';

const Profile = () => {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <TITLETABAPPLICATION />
      <TABAPPLICATION/>
      <CENTERTEXTAPPLICATION/>
      <MAINTEXTAPPLICATION/>
    </Box>
    </>
  );
};

export default Profile;