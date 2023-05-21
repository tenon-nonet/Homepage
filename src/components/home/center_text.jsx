import Typical from "react-typical";
import { Box } from "@mui/material";

const Center_Text = () => {
  return (
    <Box sx={{ fontSize: "20px" }}>
      <Typical
        steps={[
          "Hello!", 2000, "H", 1000,
          "HOME Page", 3000, "H",
        ]}
        wrapper="h2"
      />
    </Box>
  );
};

export default Center_Text;