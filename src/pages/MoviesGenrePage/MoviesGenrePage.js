import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {getAllGenreMovies} from "../../store/slices/genres.movies.slice";

const MoviesGenrePage = () => {

    const [page, setPage] = useState(1);

    const {state} = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenreMovies({
            id: state,
            currentPage: page
        }));
    }, [state]);


    const {genresMovies: {genres}} = useSelector(state => state['genresMoviesReducer']);

    console.log(genres);

    return (
        <div>
            lol
        </div>
    );
};

export default MoviesGenrePage;