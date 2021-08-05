import React from 'react';
import { Box, Link, Grid, IconButton } from '@material-ui/core';
import { Link as routeLink } from 'react-router-dom';
import { homeRoute } from './Routing';
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import appStoreBadge from '../icons/downloadAppStore.svg';
import { makeStyles } from '@material-ui/core/styles';

const menuItems = {
    Home: homeRoute,
    'Terms and Conditions': '',
    'Privacy Policy': '',
    'Collection Statement': '',
    Help: '',
    'Manage Account': '',
};
const useStyles = makeStyles((theme) => ({
    storeIconWrapper: {
        textAlign: 'right',
        paddingTop: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
        },
    },
    storeIcon: {
        height: '36px',
        maxWidth: '100%',
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(1),
            marginLeft: 0,
        },
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    gpIcon: {
        height: '51px',
        marginBottom: '-8px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: 0,
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-8px',
        },
    },
    socialIcon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
    },
}));
const menuList = Object.keys(menuItems);

export default function Footer() {
    const classes = useStyles();
    return (
        <Box mt={'5rem'}>
            <Box maxWidth='1920px' p={6} m='auto'>
                <Box ml={-1.5}>
                    {menuList.map((value, index) => (
                        <Box
                            display='inline-block'
                            pl={1.5}
                            pr={1.5}
                            mb={1}
                            borderRight={index === menuList.length - 1 ? 0 : 1}
                            borderColor='#ccc'
                            lineHeight='1'
                            key={`footerMenu${value}`}
                        >
                            <Link
                                variant='body2'
                                color='textSecondary'
                                to={menuItems[value] ? menuItems[value] : ''}
                                style={{
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                }}
                                component={routeLink}
                            >
                                {value}
                            </Link>
                        </Box>
                    ))}
                </Box>
                <Box mt={2} mb={6}>
                    <Typography color='textSecondary' variant='body2'>
                        Copyright 2021 DEMO Streaming. All rights Reserved.
                    </Typography>
                </Box>
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <IconButton
                            aria-label='Open Facebook page'
                            className={classes.socialIcon}
                        >
                            <FacebookIcon fontSize='large' />
                        </IconButton>
                        <IconButton
                            className={classes.socialIcon}
                            aria-label='Open Twitter page'
                        >
                            <TwitterIcon fontSize='large' />
                        </IconButton>
                        <IconButton
                            className={classes.socialIcon}
                            aria-label='Open Instagram page'
                        >
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box className={classes.storeIconWrapper}>
                            <img
                                tabIndex='0'
                                src={appStoreBadge}
                                className={classes.storeIcon}
                                alt='Download on the App Store'
                            />

                            <img
                                tabIndex='0'
                                alt='Get it on Google Play'
                                className={`${classes.storeIcon} ${classes.gpIcon}`}
                                src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                            />

                            <img
                                tabIndex='0'
                                className={classes.storeIcon}
                                src='https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png'
                                alt='Get it from Microsoft'
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
