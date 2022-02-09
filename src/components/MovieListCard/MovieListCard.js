import React from 'react';
import {Link} from "react-router-dom";

import './movie.list.card.modules.css'

const MovieListCard = ({movie: {id,title, overview, release_date, backdrop_path}}) => {


    const imgApi = 'https://image.tmdb.org/t/p/original/'


    return (
        <div className={'wrapListCard'}>
            <img src={imgApi + backdrop_path} alt=""/>
            <div className={'descriptionCard'}>
                <div>
                    <h2>{title}</h2>
                    <button><Link to={'details'} state={id}>details</Link></button>
                </div>
                <hr/>
                <div>Date: {release_date}</div>
                <br/>
                <div>Description: {overview}</div>
            </div>
        </div>
    );
};

export default MovieListCard;