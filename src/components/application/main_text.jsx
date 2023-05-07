import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Typical from "react-typical";

const Title_Tab = () => {
  return (
    <>

      <Box sx={{ fontSize: '40px', position: 'center', borderBottom: '1px solid' }}>
        application
      </Box>
      <Box sx={{ fontSize: '15px', position: 'center', padding: '90px' }}>
        <Typical
        steps={["kgjcswmnYGsVBzmUWwTWEZUUaPecWheMyuaGnuUbhB-"]} 
        wrapper="p"
        />
        <br />
        <Typical
        steps={["BerzVAMDtDNnDbggDJuiPJEXiJmQtpmAkY-"]} 
        wrapper="p"
        />
        <br />
        <Typical
        steps={["rgUHpdsVtcpburcAeN-"]} 
        wrapper="p"
        />
        <br />
        <Typical
        steps={["VhszACkDfSpbCFewQxgu-"]} 
        wrapper="p"
        />
        <br />
        <Typical
        steps={["mGQKxMHHLgPFwVBLNSQXNghmsJetnURPpjpHFkrzbpQzdyxDzMuQpjdGhDt-"]} 
        wrapper="p"
        />
        <br />
        <Typical
        steps={["BerzVAMDtDNnDbggDJuiPJEXiJmQtpmAkYRzpVFrkNkAWiZRuXxxWwDzukrXbRaTAGUQFWp-"]} 
        wrapper="p"
        />
      </Box>

    </>
  );
};

export default Title_Tab;