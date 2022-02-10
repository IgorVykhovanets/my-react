import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store/slices/genres.slice";
import Genre from "../../components/Genre/Genre";
import './genres.page.modules.css';

const GenresPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    },[])

    const {genres: {genres}} = useSelector(state => state['genresReducer']);

    return (
        <div className={'genresBoxElement'}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresPage;