import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../config';

//API
export const getBgImgAsync = createAsyncThunk(
    'bgImg/fetchContent',
    async (listParam = '', ThunkAPI) => {
        try {
            const response = await fetch(`${API_URL}bg-img`);
            const data = await response.json();
            return data.imageList;
        } catch (e) {
            return ThunkAPI.rejectWithValue(e.response.data);
        }
    }
);

//Initial State
const initialState = {
    imgList: [],
    status: 'idle',
};

export const bgImgSlice = createSlice({
    name: 'bgImg',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBgImgAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBgImgAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.imgList = action.payload;
            })
            .addCase(getBgImgAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const { reducer } = bgImgSlice;
export default bgImgSlice.reducer;
