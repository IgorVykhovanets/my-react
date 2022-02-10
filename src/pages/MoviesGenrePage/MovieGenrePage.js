import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenreMovies} from "../../store/slices/genres.movies.slice";
import {useLocation} from "react-router-dom";

const MovieGenrePage = () => {

    const {state} = useLocation();

    const id = state;

    const {genreMovies, currentPage} = useSelector(state => state['genresMoviesReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenreMovies({id, currentPage}));
    } ,[])

    console.log(genreMovies)

    return (
        <div>
            lol
        </div>
    );
};

export default MovieGenrePage;