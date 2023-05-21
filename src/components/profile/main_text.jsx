import { Box, Typography } from '@mui/material';
import FadeIn from "../fadeIn";
const Main_Text = () => {
  return (
    <>
      <Box sx={{ fontSize: '15px', textAlign: "center" }}>
        <Typography component="p"><FadeIn text="経歴をここに書く" /></Typography>
      </Box>
    </>
  );
};

export default Main_Text;