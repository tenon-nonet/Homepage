import { Box, Typography } from '@mui/material';
import FadeIn from "../fadeIn";
const Main_Text = () => {
  return (
    <>
      <Box sx={{ fontSize: '40px', borderBottom: '1px solid', textAlign: "center" }}>
        profile
      </Box>
      <Box sx={{ fontSize: '15px', textAlign: "center" }}>
        <Typography component="p"><FadeIn text="私はてのん。人間のふりをしている。" /></Typography>
      </Box>
    </>
  );
};

export default Main_Text;