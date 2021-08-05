import React from 'react';

import { Box, Typography } from '@material-ui/core';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

export default function ErrorAlert() {
    return (
        <Box
            role='alert'
            borderColor='error.main'
            border='1px solid'
            borderRadius='4px'
            p={1.2}
            mt={1}
            pl={2}
            pr={2}
            color='error.main'
        >
            <ErrorOutlineOutlinedIcon color='error.main' />
            <Typography
                variant='body2'
                component='body2'
                style={{ paddingLeft: '1rem', verticalAlign: 'super' }}
            >
                Something went wrong. Please try again!
            </Typography>
        </Box>
    );
}
