import React from 'react';
import {useSelector} from "react-redux";
import MovieListCard from "../../components/MovieListCard/MovieListCard";
import './search.page.modules.css'
import SearchForm from "../../components/SearchForm/SearchForm";

const SearchPage = () => {

    const {movies: {results}} = useSelector(state => state['searchReducer']);

    console.log(results)

    return (
        <div>
            <div className={'searchTitleBlock'}><SearchForm/></div>
            <div className={'searchBlock'}>
                {results && results.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default SearchPage;