import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {usersService} from "../../services/users.service";

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectedWithValue}) => {
        try {
            const allUsers = await usersService.getAll();
            return allUsers;
        } catch (e) {
            rejectedWithValue(e)
        }
    }
);

export const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: []
    },
    reducers: {

    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
        }
    }
});

export const usersReducer = usersSlice.reducer;
