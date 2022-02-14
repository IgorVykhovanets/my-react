import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {moviesService} from "../../services/movies.service";

export const getMovieSearch = createAsyncThunk(
    'searchSlice/getMovieSearch',
    async (data, {rejectWithValue}) => {
        try {
            const movie = moviesService.getMovieBySearch(data);
            return movie;
        } catch (e) {
            console.log(e)
        }
    }
);

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        movies: []
    },
    reducers: {},
    extraReducers:{
        [getMovieSearch.pending]: (state, action) => {
            console.log('loading');
        },
        [getMovieSearch.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getMovieSearch.rejected]: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const searchReducer = searchSlice.reducer;