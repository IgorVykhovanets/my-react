import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {genresService} from "../../services/genres.service";

export const getAllGenreMovies = createAsyncThunk(
    'genresMovieSlice/getAllGenreMovies',
    async ({id, currentPage}, {rejectedWithValue}) => {
        try {
            const genreMovies = genresService.getMoviesGenre(id, currentPage);
            return genreMovies;
        } catch (e) {
            console.log(e)
        }
    }
);

export const genresMoviesSlice = createSlice({
    name: 'genresMovieSlice',
    initialState: {
        genresMovies: [],
        currentPage: 1
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