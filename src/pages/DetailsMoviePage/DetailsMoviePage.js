import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieById} from "../../store/slices/deteils.movie.slice";
import DetailMovie from "../../components/DetailMovie/DetailMovie";

const DetailsMoviePage = () => {

    const {state} = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(state));
    },[state])

    const {movie} = useSelector(state => state['movieDetailReducer']);

    return (
        <div>
            {movie && <DetailMovie movie={movie}/>}
        </div>
    );
};

export default DetailsMoviePage;