import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movies.slice";
import {genresReducer} from "./slices/genres.slice";
import {movieDetailReducer} from "./slices/deteils.movie.slice";

export const store = configureStore({
    reducer:{
        moviesReducer,
        genresReducer,
        movieDetailReducer
    }
})

export default store;