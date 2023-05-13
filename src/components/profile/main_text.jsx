import { Box, Typography } from '@mui/material';

const Main_Text = () => {
  return (
    <>
      <Box sx={{ fontSize: '40px', borderBottom: '1px solid', textAlign: "center" }}>
        profile
      </Box>
      <Box sx={{ fontSize: '15px', textAlign: "center" }}>
        <Typography component="p">私はてのん。人間のふりをしている。</Typography>
      </Box>
    </>
  );
};

export default Main_Text;