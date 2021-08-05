import React from 'react';
import { Box, Link, Grid } from '@material-ui/core'
import { Link as routeLink } from 'react-router-dom';
import { homeRoute } from './Routing'
import { Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import appStoreBadge from '../icons/downloadAppStore.svg'
import { makeStyles } from '@material-ui/core/styles';

const menuItems = {
    'Home': homeRoute,
    'Terms and Conditions': '',
    'Privacy Policy': '',
    'Collection Statement': '',
    'Help': '',
    'Manage Account': ''
}
const useStyles = makeStyles((theme) => ({
    storeIcon: {
        height: '36px',
        maxWidth: '100%',
        paddingLeft: theme.spacing(2)
    },
    socialIcon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1)
    }
}))
const menuList = Object.keys(menuItems);

export default function Footer() {
    const classes = useStyles();
    return (
        <Box mt={10}>
            <Box maxWidth='1920px' p={6} m='auto'>
                <Box ml={-1.5}>
                    {menuList.map((value) => (
                        <Box display='inline-block' pl={1.5} pr={1.5} borderRight={1} borderColor='text.disabled' lineHeight='1' key={`footerMenu${value}`}>
                            <Link variant='body2' color='textSecondary' to={menuItems[value] ? menuItems[value] : ''} style={{ textDecoration: 'none', cursor: 'pointer' }} component={routeLink}>
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
                    <Grid item xs={12} sm={6}>
                        <FacebookIcon fontSize='large' className={classes.socialIcon} />
                        <TwitterIcon fontSize='large' className={classes.socialIcon} />
                        <InstagramIcon fontSize='large' className={classes.socialIcon} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box textAlign='right'>
                            <img src={appStoreBadge} className={classes.storeIcon} alt='Download on the App Store'/>

                            <img alt='Get it on Google Play' className={classes.storeIcon} style={{
                                marginBottom: '-8px', height: '51px'}}src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>

                            <img className={classes.storeIcon} src='https://developer.microsoft.com/store/badges/images/English_get-it-from-MS.png' alt='Get it from Microsoft' />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}