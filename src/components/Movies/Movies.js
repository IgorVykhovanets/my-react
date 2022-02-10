import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices/movies.slice";
import MovieListCard from "../MovieListCard/MovieListCard";
import './movies.modules.css'

const Movies = () => {

    const [page, setPage] = useState([null]);
    const [currentPage, setCurrentPage] = useState([1]);

    const dispatch = useDispatch();

    const {movies: {results}} = useSelector(state => state['moviesReducer']);

    useEffect(() => {
        dispatch(getAllMovies(currentPage)).then(movies => setPage(movies.payload));
    }, [currentPage]);

    const nextPage = () => {
        if (currentPage < page.total_pages) {
            setCurrentPage(+currentPage + 1);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(+currentPage - 1);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        }
    };

    return (
        <div>
            <div className={'wrapMovies'}>
                    <div className={'titleMovies'}>
                        <h2   className={'moviesListTitle'}>M O V I E S</h2>
                        <div className={'btnListElement'}>
                            <button onClick={() => prevPage()}>p r e v</button>
                            <button onClick={() => nextPage()}>n e x t</button>
                        </div>
                    </div>
                <div>
                    {results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        </div>
    );
};

export default Movies;