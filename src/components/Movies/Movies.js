import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store/slices/movies.slice";

const Movies = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    } , [])

    const {movies} = useSelector(state => state['moviesReducer']);


    return (
        <div>
            lol
        </div>
    );
};

export default Movies;