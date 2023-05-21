import { Box, Tabs, Tab } from '@mui/material';
import FadeIn from "../fadeIn";
import TabPanel from '../tabpanel';
import PropTypes from 'prop-types';
import { useState } from "react";
import PHP from "./contents/php";
import JAVASCRIPT from "./contents/javascript";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
const Main_Text = () => {
  const [TabValue, setTab] = useState(0);
  const TabChange = (event, newValue) => setTab(newValue);
  return (
    <>
      <Box sx={{ fontSize: '15px', position: 'absolute', top: '250px', textAlign: "center" }}>
        <FadeIn text="経歴をここに書く" />
      </Box>
      <Box sx={{ top: '400px', position: 'absolute', maxWidth: { xs: 320, sm: 600 }, bgcolor: 'background.paper' }} display="flex" justifyContent="center" >
        <Tabs value={TabValue} onChange={TabChange} variant="scrollable" scrollButtons="auto" aria-label="Tab">
          <Tab label="OVERVIEW" {...a11yProps(0)} />
          <Tab label="Javascript" {...a11yProps(1)} />
          <Tab label="PHP" {...a11yProps(1)} />
        </Tabs>
      </Box >
      <Box sx={{ fontSize: '15px', position: 'absolute', top: '430px', padding: '40px' }} display="flex" justifyContent="center">
        <TabPanel value={TabValue} index={0}>
          {/* < OVERVIEW/> */}
        </TabPanel>
        <TabPanel value={TabValue} index={1}>
          <JAVASCRIPT />
        </TabPanel>
        <TabPanel value={TabValue} index={2}>
          <PHP />
        </TabPanel>
      </Box >
    </>
  );
};

export default Main_Text;