import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, CircularProgress, Collapse, Typography } from '@material-ui/core';

import { getContentsAsync, resetData } from '../reducers/funfactSlice';

import ErrorAlert from './ErrorAlert';

export default function Funfact() {
    const dispatch = useDispatch();
    const funFactStates = useSelector(state => state.funfact);

    useEffect(() => {
        return () => {
            dispatch(resetData());
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }, [])

    return (
        <Box mb={2} mt={.5}>
            <Typography variant='body1' component='body1' color='textSecondary' style={{ verticalAlign: 'middle' }}>{funFactStates.year}</Typography>

            <Button color='primary' onClick={() => { dispatch(getContentsAsync(funFactStates.year)) }} style={{ marginLeft: '.5rem' }}>
                Fun Fact of {funFactStates.year}?
            </Button>
            <Collapse in={funFactStates.status === 'fulfilled' || funFactStates.status === 'loading'} timeout={300}>
                <Box p={2} mb={2} mt={1} border={1} borderColor='primary.main' style={{ borderStyle: 'dashed' }}>
                    {funFactStates.status === 'loading' && <Box textAlign='center' mb={2}><CircularProgress size={23} /></Box>}
                    {funFactStates.status === 'fulfilled' && 
                        <Typography variant='body2'>{funFactStates.funfact}</Typography>
                    }
                </Box>
            </Collapse>
            {funFactStates.status === 'rejected' && <ErrorAlert />}
        </Box>

    )
}