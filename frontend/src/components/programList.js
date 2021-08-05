import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import DetailDialog from './DetailDialog'
import ErrorAlert from './ErrorAlert';

import ItemList from './ItemList'
import { setProgramType, getProgramsAsync } from '../reducers/itemListSlice';

export default function ProgramList(props) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const itemListStates = useSelector(state => state.itemList)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(setProgramType(props.programType));
    dispatch(getProgramsAsync(props.programType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.programType])

  return (
    <Box p={6} maxWidth={'1920'}>
      <Box mb={8}>
        <Typography variant="h2" align="center" color="textPrimary">
          {itemListStates.programType === 'movie' ? itemListStates.programType + 's' : itemListStates.programType}</Typography>
        <Typography variant="subtitle1" align="center" color="textPrimary">
          Find our popular {itemListStates.programType} titles here! <br />Click item to view more details.</Typography>
      </Box>
      <Box textAlign="center">
        {itemListStates.status === 'loading' && <CircularProgress size={68} />}
        {itemListStates.status === 'fulfilled' && <ItemList open={handleClickOpen.bind(this)} />}
        {itemListStates.status === 'rejected' && <ErrorAlert />}
      </Box>
      <DetailDialog selectedData={itemListStates.selectedProgram} open={open} onClose={handleClose} maxWidth='lg' fullWidth={true} />
    </Box>
  );
}