import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.service";

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (currentPage, {getState}) => {
        try {
            const movies = await moviesService.getAllCurrentPage(currentPage);
            return movies;
        } catch (e) {
            console.log(e)
        }
    }
);

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        currentPage: 1
    },
    reducers: {},
    extraReducers: {
        [getAllMovies.pending]: (state, action) => {
            console.log('loading');
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getAllMovies.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const moviesReducer = moviesSlice.reducer;