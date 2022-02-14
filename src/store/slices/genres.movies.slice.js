import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {genresService} from "../../services/genres.service";

export const getAllGenreMovies = createAsyncThunk(
    'genresMovieSlice/getAllGenreMovies',
    async ({id,currentPage}, {rejectWithValue}) => {
        try {
            const moviesGenres = genresService.getAllMoviesGenresPage(id, currentPage);
            return moviesGenres;
        } catch (e) {
            rejectWithValue(e)
        }
    }
);

export const genresMoviesSlice = createSlice({
    name: 'genresMovieSlice',
    initialState: {
        genresMovies: []
    },
    reducers: {},
    extraReducers: {
        [getAllGenreMovies.pending]: (state, action) => {
            console.log('loading');
        },
        [getAllGenreMovies.fulfilled]: (state, action) => {
            state.genresMovies = action.payload;
        },
        [getAllGenreMovies.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }
});

export const genresMoviesReducer = genresMoviesSlice.reducer;