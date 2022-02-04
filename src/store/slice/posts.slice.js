import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postsService} from "../../services/posts.service";

export const getAllPosts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (state, {rejectWithValue}) => {
        try {
            const postsArr = postsService.getAll();
            console.log(postsArr)
            return postsArr;
        } catch (e) {
            rejectWithValue(e);
        }
    }
);

export const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: []
    },
    reducers: {

    },
    extraReducers: {
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
        }
    }
});

export const postsReducer = postsSlice.reducer