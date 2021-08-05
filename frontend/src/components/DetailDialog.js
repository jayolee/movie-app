import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    IconButton,
    Fab,
    Dialog,
    Box,
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';
import Funfact from './Funfact';
import CloseIcon from '@material-ui/icons/Close';

import { setYear } from '../reducers/funfactSlice';

const useStyles = makeStyles((theme) => ({
    posterImg: {
        width: '100%',
        maxHeight: 'calc(100vh - 104px)',
        objectFit: 'contain',
        position: 'relative',
        boxSizing: 'border-box',
    },
    bgImg: {
        filter: 'url(#svg-blur)',
        webkitFilter: 'url(#svg-blur)',
        height: '110vh',
        width: '110%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: '-5vh',
        left: '-5%',
    },
    closeBtn: {
        position: 'absolute',
        right: '20px',
        top: '20px',
        [theme.breakpoints.down('sm')]: {
            right: '16px',
            top: '16px',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    closeBtn_fab: {
        top: '10px',
        position: 'fixed',
        right: '10px',
        zIndex: '999',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    contentWrapper: {
        padding: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.spacing(6),
            padding: theme.spacing(4),
        },
    },
}));

export default function DetailDialog(props) {
    const classes = useStyles();
    const { onClose, open } = props;
    const itemList = useSelector((state) => state.itemList);
    const selectedItem = itemList.selectedProgram;
    const dispatch = useDispatch();
    dispatch(setYear(selectedItem.releaseYear));

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-label={selectedItem.title}
            open={open}
            maxWidth='lg'
            fullWidth={true}
        >
            <Fab
                aria-label='close'
                onClick={handleClose}
                className={classes.closeBtn_fab}
            >
                <CloseIcon />
            </Fab>
            <IconButton
                aria-label='close'
                onClick={handleClose}
                className={classes.closeBtn}
            >
                <CloseIcon />
            </IconButton>
            {selectedItem && (
                <Grid container>
                    <Grid item key='dialogImg' xs={12} sm={6} md={5}>
                        <Box
                            position='relative'
                            overflow='hidden'
                            height='100%'
                            display='flex'
                        >
                            <Box
                                className={classes.bgImg}
                                style={{
                                    backgroundImage: `url(${selectedItem.images['Poster Art'].url})`,
                                }}
                            />
                            <svg style={{ position: 'absolute' }}>
                                <filter id='svg-blur'>
                                    <feGaussianBlur stdDeviation='20' />
                                </filter>
                            </svg>
                            <img
                                className={classes.posterImg}
                                src={selectedItem.images['Poster Art'].url}
                                alt='Poster Art'
                            />
                        </Box>
                    </Grid>
                    <Grid item key='dialogBody' xs={12} sm={6} md={7}>
                        <Box className={classes.contentWrapper}>
                            <Typography variant='h2'>
                                {selectedItem.title}
                            </Typography>
                            <Box>
                                <Funfact year={selectedItem.releaseYear} />
                            </Box>

                            <Typography variant='body1'>
                                {selectedItem.description}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Dialog>
    );
}
