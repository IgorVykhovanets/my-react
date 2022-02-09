import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movies.slice";

export const store = configureStore({
    reducer:{
        moviesReducer
    }
})