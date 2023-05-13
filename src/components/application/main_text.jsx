//無理やり位置指定してて保守性ないから直しときな
// もうちょい待ってて
import { Box, Tabs, Tab } from '@mui/material';
import TabPanel from '../tabpanel';
import PropTypes from 'prop-types';
import { useState } from "react";
import BOOKSTAND from "./contents/bookStand";
import QUIZ from "./contents/dddQuize";
import SPEAKER from "./contents/dddSpeaker";
import THREADS from "./contents/sdpsThreads";
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
        今まで作成したWebアプリ<br />一つ作る毎に、学び、成長している
      </Box>
      <Box sx={{ top: '400px', position: 'absolute', maxWidth: { xs: 320, sm: 600 }, bgcolor: 'background.paper' }} display="flex" justifyContent="center" >
        <Tabs value={TabValue} onChange={TabChange} variant="scrollable" scrollButtons="auto" aria-label="Tab">
          <Tab label="SPDS THREADS" {...a11yProps(0)} />
          <Tab label="DDDSPEAKER" {...a11yProps(1)} />
          <Tab label="DDDQUIZE" {...a11yProps(2)} />
          <Tab label="BOOKSTAND" {...a11yProps(3)} />
        </Tabs>
      </Box >
      <Box sx={{ fontSize: '15px', position: 'absolute', top: '430px', padding: '40px' }} display="flex" justifyContent="center">
        <TabPanel value={TabValue} index={0}>
          <THREADS />
        </TabPanel>
        <TabPanel value={TabValue} index={1}>
          <SPEAKER />
        </TabPanel>
        <TabPanel value={TabValue} index={2}>
          <QUIZ />
        </TabPanel>
        <TabPanel value={TabValue} index={3}>
          <BOOKSTAND />
        </TabPanel>
      </Box>
    </>
  );
};

export default Main_Text;