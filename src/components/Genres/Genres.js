import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store/slices/genres.slice";
import Genre from "../Genre/Genre";

const Genres = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    } ,[])

    const {genres: {genres}} = useSelector(state => state['genresReducer']);

    const genresArr = [genres];

    console.log(genresArr)

    return (
        <div>
            {genresArr.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;