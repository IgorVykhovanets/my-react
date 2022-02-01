import React from 'react';
import {Link} from "react-router-dom";

import './episode.modules.css'

const Episodes = ({episode: {id, name, air_date, episode}}) => {
    return (
        <div>
            <div className={'wrapEpisode'}>
                <div>{name}</div>
                <div>{air_date}</div>
                <div>{episode}</div>
                <div className={'button'}>
                    <button><Link to={`${id}/characters`} state={id}>Episode Detail</Link></button>
                </div>
            </div>
        </div>

    );
};

export default Episodes;