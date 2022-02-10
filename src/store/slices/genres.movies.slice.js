import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const genresMoviesSlice = createSlice({
    name: 'genresMovieSlice',
    initialState: {
        genresMovies: []
    },
    reducers: {},
    extraReducers: {}
});

export const genresMoviesReducer = genresMoviesSlice.reducer;