import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./slice/car.slice";
import {usersReducer} from "./slice/users.slice";
import {postsReducer} from "./slice/posts.slice";
import {commentsReducer} from "./slice/comments.slice";

const store = configureStore({
    reducer: {
        carReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }
});

export default store;