import Typical from "react-typical";
import { Box } from "@mui/material"
const Left_Text = () => {
  return (

    <h1>
      <Box sx={{ position: 'absolute', top: "100px", left: "30px", }}>
        <Typical
          steps={["APPLICATION"]}
          wrapper="h2"
        />
      </Box >
    </h1>

  );
};

export default Left_Text;