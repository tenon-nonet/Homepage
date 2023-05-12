import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

import CENTERTEXTPROFILE from './left_text';
import TABPROFILE from './tab';
import MAINTEXTPROFILE from './main_text';
import TITLETAB from '../title_tab';

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function HideAppBar(props) {
    return (
        <React.Fragment >
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar >
                    <Toolbar bgcolor="white">
                        <Typography variant="h3" component="div" color="black" >
                            <TITLETAB />
                            <TABPROFILE />
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
            <Container>
                <Box style={{ color: 'black', my: 2 }}>
                    <CENTERTEXTPROFILE />
                    <MAINTEXTPROFILE />
                </Box>
            </Container>
        </React.Fragment>
    );
}

