import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../config';

//API
export const getContentsAsync = createAsyncThunk(
    'funfact/fetchContent',
    async (year, ThunkAPI) => {
        try {
            const response = await fetch(`${API_URL}fun-fact?year=${year}`);
            const data = await response.json();
            return data.funfact;
        } catch (e) {
            return ThunkAPI.rejectWithValue(e.response.data);
        }
    }
);

//Initial State
const initialState = {
    funfact: '',
    year: '',
    status: 'idle',
};

export const funfactSlice = createSlice({
    name: 'funfact',
    initialState,
    reducers: {
        setYear: (state, action) => {
            return {
                ...state,
                year: action.payload,
            };
        },
        resetData: (state) => {
            return {
                ...state,
                funfact: '',
                year: '',
                status: 'idle',
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getContentsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getContentsAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                if (action.payload[0] !== '<') state.funfact = action.payload;
                else state.status = 'rejected';
            })
            .addCase(getContentsAsync.rejected, (state) => {
                state.status = 'rejected';
            });
    },
});

export const { setData, setYear, resetData } = funfactSlice.actions;
export const { reducer } = funfactSlice;
export default funfactSlice.reducer;
