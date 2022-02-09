import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services/movies.service";

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectedWithValue}) => {
        try {
            const movies = await moviesService.getAll();
            return movies;
        } catch (e) {
            return rejectedWithValue(e);
        }
    }
);

export const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        movie: null
    },
    reducers:{},
    extraReducers:{
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