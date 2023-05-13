import Typical from "react-typical";
import { Box, useMediaQuery } from "@mui/material";

const Left_Text = data => {
  const isSmallScreen = useMediaQuery("(max-width:375px)");
  return (
    <Box sx={{ position: 'absolute', top: "100px", left: "30px", fontSize: isSmallScreen?"20px":"30px" }}>
      <Typical
        steps={[data.content]}
        wrapper="h2"
      />
    </Box >
  );
};

export default Left_Text;