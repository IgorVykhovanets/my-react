import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {commentsService} from "../../services/comments.service";

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (state, {rejectedWithValue}) => {
        try {
            const commentsArr = commentsService.getAll();
            return commentsArr;
        } catch (e){
            rejectedWithValue(e)
        }
    }
);

export const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState: {
        comments: []
    },
    reducers: {

    },
    extraReducers:{
        [getAllComments.fulfilled]: (state, action) => {
            state.comments = action.payload;
        }
    }
})

export const commentsReducer = commentsSlice.reducer;