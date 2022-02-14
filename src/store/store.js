import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices/movies.slice";
import {genresReducer} from "./slices/genres.slice";
import {movieDetailReducer} from "./slices/deteils.movie.slice";
import {genresMoviesReducer} from "./slices/genres.movies.slice";
import {searchReducer} from "./slices/search.slice";

export const store = configureStore({
    reducer:{
        moviesReducer,
        genresReducer,
        movieDetailReducer,
        genresMoviesReducer,
        searchReducer
    }
})

export default store;