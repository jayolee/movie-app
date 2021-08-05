import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { IconButton, Fab, Dialog, Box, Grid, Typography, makeStyles } from '@material-ui/core'
import Funfact from './Funfact'
import CloseIcon from '@material-ui/icons/Close';

import { setYear } from '../reducers/funfactSlice';


const useStyles = makeStyles((theme)=>({
  posterImg: {
    width: '100%',
    maxHeight: 'calc(100vh - 104px)',
    objectFit: 'contain',
    position: 'relative',
    boxSizing: 'border-box'
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
    left: '-5%'
  },
  closeBtn: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
    
  },
  closeBtn_fab: {
    top: '10px',
    position: 'fixed',
    right: '10px',
    zIndex: '999',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

export default function DetailDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const itemList = useSelector(state => state.itemList)
  const selectedItem = itemList.selectedProgram
  const dispatch = useDispatch();

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    dispatch(setYear(selectedItem.releaseYear));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem])

  return (
    <Dialog onClose={handleClose} aria-label={selectedItem.title} open={open} maxWidth='lg' fullWidth={true}>
        <Fab aria-label='close' onClick={handleClose} className={classes.closeBtn_fab} >
                    <CloseIcon />
        </Fab>
        <IconButton aria-label='close' onClick={handleClose} className={classes.closeBtn} >
                    <CloseIcon />
        </IconButton>
      {selectedItem && <Grid container>
        <Grid item key='dialogImg' xs={12} md={5}>
          <Box position='relative' overflow='hidden'>
          <Box className={classes.bgImg} style={{ backgroundImage: `url(${selectedItem.images['Poster Art'].url})` }} />
            <svg style={{display:'none'}}>
              <filter id='svg-blur'>
                <feGaussianBlur stdDeviation='20' />
              </filter>
            </svg>
            <img className={classes.posterImg} src={selectedItem.images['Poster Art'].url} alt='Poster Art'/>
          </Box>
        </Grid>
        <Grid item key='dialogBody' xs={12} md={7}>
          <Box p={6}>
            <Typography variant='h2' style={{fontWeight: '600'}}>{selectedItem.title}</Typography>
            <Box>
              <Funfact year={selectedItem.releaseYear} />
            </Box>

            <Typography variant='body1'>{selectedItem.description}</Typography>
          </Box>
        </Grid>
      </Grid>}
    </Dialog>
  );
}