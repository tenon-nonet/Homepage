import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PeopleIcon from '@mui/icons-material/People';
import GitHubIcon from '@mui/icons-material/GitHub';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction a href='https://github.com/tenon-nonet' label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction a href='https://threads.tenon-nonet.com' label="SDPsThreads" icon={<PeopleIcon />} />
          <BottomNavigationAction a href='https://speaker.tenon-nonet.com' label="DDDSpeaker" icon={<VolumeUpIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}