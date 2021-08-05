import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { homeRoute, seriesRoute, moviesRoute } from './Routing'

import { Box, AppBar, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core'
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const useStyles = makeStyles((theme) => ({
    logo: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        textDecoration: 'none',
        fontWeight: '300',
        letterSpacing: '2px'
    },
    navbar: {
        transition: '.2s',
        flexDirection: 'row',
        background: '#ffffffD9',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: theme.spacing(6),
        paddingLeft: theme.spacing(6),
        boxShadow: 'none',
        margin: '0 auto',
        height: '50px',
        borderRadius: '25px',
    },
    homeNavBar: {
        justifyContent: 'center',
        background: 'none',
    },
    menuIcons: {
        marginRight: theme.spacing(2)
    }
}))
  
export default function Header() {
    const curLocation = useLocation().pathname;
    const classes = useStyles();
    return (
        <Box maxWidth='1920px' p={1} position='sticky' top='0' zIndex='999'>
        <AppBar position='static' key='navbar' className={`${classes.navbar} ${curLocation === '/' ? classes.homeNavBar : ''}`}>
            <Typography variant='h6' key='logo' className={classes.logo} aria-label='home' component={Link} to={homeRoute} color='primary' style={{color: curLocation === '/' ? '#ffffff': ''}}>
                DEMO Streaming
          </Typography>
            <Box display={curLocation === '/' ? 'none' : ''} key='navmenus'>
                <Tooltip title='Series' aria-label='series'>
                    <IconButton component={Link} to={seriesRoute}>
                        <OndemandVideoIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Movies' aria-label='movies'>
                    <IconButton component={Link} to={moviesRoute}>
                        <MovieOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </AppBar>
        </Box>
    )
}