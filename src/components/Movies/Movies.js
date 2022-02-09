import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices/movies.slice";
import MovieListCard from "../MovieListCard/MovieListCard";
import './movies.modules.css'

const Movies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    } ,[])

    const {movies: {results}} = useSelector(state => state['moviesReducer']);

    return (
        <div className={'wrapMovies'}>
            {results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default Movies;