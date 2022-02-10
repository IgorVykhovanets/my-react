import React from 'react';

import './detail.movie.modules.css'
import GenreDetailMovie from "../GenreDetailMovie/GenreDetailMovie";

const DetailMovie = ({
                         movie: {
                             original_title,
                             overview,
                             poster_path,
                             release_date,
                             original_language,
                             homepage,
                             genres
                         }
                     }) => {

    const imgApi = 'https://image.tmdb.org/t/p/original/';


    return (
        <div className={'DetailMovie'}>
            <div className={'titleDetailMovie'}><h1>M  O  V  I  E</h1></div>
            <div className={'detailMovieHeader'}>
                <img src={imgApi + poster_path} alt=""/>
                <div className={'headerTitle'}>
                    <h2>{original_title}</h2>
                    <h4>Language:  {original_language}</h4>
                </div>
            </div>
            <div className={'footerDescription'}>
                <div className={'footerDate'}>
                    <span>Date</span>: {release_date}
                </div>
                <hr/>
                <div>Description: {overview}</div>
                <hr/>
                <div className={'genresDetail'}><span>Genres</span>: {genres.map(genre => <GenreDetailMovie key={genre.id} genre={genre}/>)}</div>
                <hr/>
                <div className={'footerWebSite'}><span>website</span>: {homepage}</div>
            </div>
        </div>
    );
};

export default DetailMovie;