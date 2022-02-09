import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {genresService} from "../../service/genres.service";

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectedWithValue}) => {
        try {
            const genres = await genresService.getAll();
            return genres;
        } catch (e) {
            return rejectedWithValue(e);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: []
    },
    reducers: {},
    extraReducers:{
        [getAllGenres.pending]: (state, action) => {
            console.log("loading");
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.genres = action.payload;
        },
        [getAllGenres.rejected]: (state, action) => {
            console.log(action.payload);
        }

    }
})

export const genresReducer = genresSlice.reducer;