import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.service";

export const getMovieById = createAsyncThunk(
    'detailsMovieSlice/getMovieById',
    async (id, {rejectedWithValue}) => {
        try {
            const movie = moviesService.getById(id);
            return movie
        } catch (e) {
            return  rejectedWithValue(e)
        }
    }
);

export const deteilsMovieSlice = createSlice({
    name: 'detailsMovieSlice',
    initialState: {
        movie: null
    },
    reducers: {},
    extraReducers: {
        [getMovieById.pending]: (state, action) => {
            console.log('loading');
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.movie = action.payload;
        },
        [getMovieById.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }
});

export const movieDetailReducer = deteilsMovieSlice.reducer