import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import {getAllGenreMovies} from "../../store/slices/genres.movies.slice";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import './movies.genre.page.modules.css'

const MoviesGenrePage = () => {

    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [page, setPage] = useState(null);

    const {state} = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenreMovies({
            id: state,
            currentPage: currentPageNumber
        })).then(movies => setPage(movies.payload));
    }, [currentPageNumber]);


    const {genresMovies: {results}} = useSelector(state => state['genresMoviesReducer']);


    const nextPage = () => {
        if (currentPageNumber < page.total_pages) {
            setCurrentPageNumber(+currentPageNumber + 1);
        }
    }

    const previousPage = () => {
        if (currentPageNumber > 1) {
            setCurrentPageNumber(+currentPageNumber - 1);
        }
    };

    return (
        <div>
            <div className={'wrapButtonList'}>
                <div className={'btnListElement'}>
                    <button onClick={() => previousPage()}>prev</button>
                    <button onClick={() => nextPage()}>next</button>
                </div>
            </div>
            <div>
                <div className={'genresMovieWrap'}>{results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}</div>
            </div>
        </div>
    );
};

export default MoviesGenrePage;