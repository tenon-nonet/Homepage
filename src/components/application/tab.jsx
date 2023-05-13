import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SDPSTHREADS from './tabCom/sdpsThreads';
import { Routes, Route, Link } from 'react-router-dom';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={<Link to="../tabCom/sdpsThreads">SDPs Threads</Link>} />
          <Tab label="DDDSPEAKER" />
          <Tab label="DDDquize" />
          <Tab label="BOOKSTAND" />
        </Tabs>
      </Box>

      <Routes>
        <Route path="../tabCom/sdpsThreads" element={< SDPSTHREADS />} />
        
      </Routes>
</>
      );
};