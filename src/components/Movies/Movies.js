import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices/movies.slice";
import MovieListCard from "../MovieListCard/MovieListCard";
import './movies.modules.css'

const Movies = () => {


    const dispatch = useDispatch();

    const {movies: {results}, currentPage} = useSelector(state => state['moviesReducer']);

    useEffect(() => {
        dispatch(getAllMovies());
    } ,[])


    return (
        <div>
            <div className={'wrapMovies'}>
                {results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default Movies;