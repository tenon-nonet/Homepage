import { Box, Tabs, Tab } from '@mui/material';
import TabPanel from '../tabpanel';
import PropTypes from 'prop-types';
import { useState } from "react";
import AI from "./contents/ai";
import COMMUNITY from "./contents/community";
import DESIGN from "./contents/design";
import STUDY from "./contents/study";
import SERVER from "./contents/server";
import FadeIn from "../fadeIn";

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
        <FadeIn text="生活の全ては学びに繋がる" />
        <FadeIn text="環境を整えることは、最上への最少努力か" />
      </Box>
      <Box sx={{ top: '400px', position: 'absolute', maxWidth: { xs: 320, sm: 600 }, bgcolor: 'background.paper' }} display="flex" justifyContent="center" >
        <Tabs value={TabValue} onChange={TabChange} variant="scrollable" scrollButtons="auto" aria-label="Tab">
          <Tab label="AI" {...a11yProps(0)} />
          <Tab label="COMMUNITY" {...a11yProps(1)} />
          <Tab label="DESIGN" {...a11yProps(2)} />
          <Tab label="FRAMEWORK" {...a11yProps(3)} />
          <Tab label="STUDY" {...a11yProps(4)} />
          <Tab label="SERVER" {...a11yProps(5)} />

        </Tabs>
      </Box >
      <Box sx={{ fontSize: '15px', position: 'absolute', top: '430px', padding: '40px' }} display="flex" justifyContent="center">
        <TabPanel value={TabValue} index={0}>
          <AI />
        </TabPanel>
        <TabPanel value={TabValue} index={1}>
          <COMMUNITY />
        </TabPanel>
        <TabPanel value={TabValue} index={2}>
          <DESIGN />
        </TabPanel>
        <TabPanel value={TabValue} index={3}>
          <STUDY />
        </TabPanel>
        <TabPanel value={TabValue} index={4}>
          <SERVER />
        </TabPanel>
      </Box>
    </>
  );
};

export default Main_Text;