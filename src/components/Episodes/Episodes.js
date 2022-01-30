import React from 'react';
import {Link} from "react-router-dom";

import "./episodes.modules.css";

const Episodes = ({episodes}) => {

    const {id,name, air_date, episode} = episodes;

    return (
        <div>
            <div className={'wrapEpisode'}>
                <div>{name}</div>
                <div>{air_date}</div>
                <div>{episode}</div>
                <button className={'button'}><Link to={'/detailEpisode'} state={id}>Episode Details</Link></button>
            </div>
        </div>
    );
};

export default Episodes;