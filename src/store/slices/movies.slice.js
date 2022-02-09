import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../service/movies.service";

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (_, {rejectedWithValue}) => {
        try {
            const movies = moviesService.getAll();
            return movies;
        } catch (e) {
            return rejectedWithValue(e);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: []
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
});

export const moviesReducer = moviesSlice.reducer;

