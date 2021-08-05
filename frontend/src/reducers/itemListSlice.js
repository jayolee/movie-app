import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_URL } from '../config';

export const getProgramsAsync = createAsyncThunk(
    'itemList/fetchPrograms',
    async (programType, { rejectWithValue }) => {
        try {
            const receivedData = await fetch(
                `${API_URL}programs?programtype=${programType}`
            );
            const dataSet = await receivedData.json();
            return dataSet.programs;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

//initial state
const initialState = {
    programs: [],
    programType: '',
    selectedProgram: '',
    status: 'idle',
    error: null,
};

export const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        setProgramType: (state, action) => {
            return {
                ...state,
                programType: action.payload,
            };
        },
        setSelectedProgram: (state, action) => {
            return {
                ...state,
                selectedProgram: action.payload,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProgramsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getProgramsAsync.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.programs = action.payload;
            })
            .addCase(getProgramsAsync.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.error.message;
            });
    },
});

export const { setProgramType, setSelectedProgram } = itemListSlice.actions;
export const { reducer } = itemListSlice;
export default itemListSlice.reducer;
