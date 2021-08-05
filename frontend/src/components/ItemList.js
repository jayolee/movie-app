import React from 'react';
import { Grid, Box, Card, CardContent, CardMedia, Typography, makeStyles} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import  { setSelectedProgram } from '../reducers/itemListSlice'

const useStyles = makeStyles((theme) => ({
  paddingZero: {
    padding: 0
  },
  card: {
    margin: theme.spacing(2),
    borderRadius: '1rem',
    overflow:'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  titleWrapper: {
    textAlign: 'left',
    padding: '1.5rem 8%',
    color: '#fff',
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
    boxSizing: 'border-box'
  },
  itemYear: {
    fontSize: '.8rem',
    marginBottom: '.4rem',
    opacity: .85
  },
  itemTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    lineHeight: 1.4,
    letterSpacing: 0.2
  }
}));

export default function ItemList(props){
  const dispatch = useDispatch();
  const classes = useStyles();
  const itemList = useSelector(state => state.itemList)

  return (
    <Grid container spacing={2}>
      {itemList.programs?.map((value) => (
                <Grid item key={value.title + 'wrapper'} xs={12} sm={6} md={3} lg={2}>
                <Card className={`${classes.card} ${classes.paddingZero}`} key={value.title} variant='outlined' onClick={()=>{dispatch(setSelectedProgram(value)); props.open()}}>
                  <CardContent className={classes.paddingZero}>
                  <CardMedia style={{height: '25vw'}}
                  image={value.images['Poster Art'].url} 
                  title={value.title}
                  />
                  <Box className={classes.titleWrapper}>
                    <Typography variant='h3' className={classes.itemYear}>{value.releaseYear}</Typography>
                    <Typography variant='h2' className={classes.itemTitle}>{value.title}</Typography>
                  </Box>
                  </CardContent>
                </Card>
                </Grid>
            ))}
    </Grid>

  );
}