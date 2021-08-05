import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { seriesRoute, moviesRoute } from './Routing'

import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

import BgAni from './BgAni'

export default function Home() {
    const bgImageList = useSelector(state => state.bgImg)
    console.log(bgImageList)
    return (
        <Box position='relative' key='homeWrapper'>
                <Box width='100%' position='absolute' top='-68px' style={{ zIndex: '-999', backgroundColor: '#000' }}>
                {bgImageList.status === 'fulfilled' &&
                    <BgAni imageList={bgImageList.imgList} />
                }
                </Box>
            <Box p={4} pt={4} m='auto' minHeight='80vh' display='flex' alignItems='flex-end'>
                <Box textAlign='center' pb='20vh' width='100%'>
                    <Typography variant='h1' align='center' style={{
                        color: '#fff'
                    }}>
                        Meet our popular streaming contents
            </Typography>
                    <Typography variant='body1' style={{ color: '#ffffffCC', marginBottom: '1.7rem' }}>
                        Streaming service coming soon.<br />Preview our contents list and learn about some fun facts!
            </Typography>
                    <Button component={Link} to={seriesRoute} variant='contained' color='primary' aria-label='Go to series' size="large" disableElevation style={{ margin: '.5rem' }} startIcon={<OndemandVideoIcon />}>
                        Series
                            </Button>

                    <Button component={Link} to={moviesRoute} variant='contained' color='primary' aria-label='Go to movies' size="large" disableElevation style={{ margin: '.5rem' }} startIcon={<MovieOutlinedIcon />}>
                        Movies
                            </Button>
                </Box>
            </Box>
        </Box>
    )
}