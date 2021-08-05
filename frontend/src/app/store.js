import { configureStore } from '@reduxjs/toolkit';
import funfactReducer from '../reducers/funfactSlice';
import itemListReducer from '../reducers/itemListSlice';
import bgImgReducer from '../reducers/bgImgSlice'

export const store = configureStore({
  reducer: {
    bgImg: bgImgReducer,
    funfact: funfactReducer,
    itemList: itemListReducer
  },
});
