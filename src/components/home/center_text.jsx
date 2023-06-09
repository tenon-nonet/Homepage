import Typical from "react-typical";
import { Box } from "@mui/material";

const Center_Text = () => {
  return (
    <Box sx={{ fontSize: "20px" }}>
      <Typical
        steps={[
          "Hello :)", 500, "H", 500,"HOMEPage",2000,"H", 500,
        ]}
        loop={Infinity}
        wrapper="h2"
      />
    </Box>
  );
};

export default Center_Text;