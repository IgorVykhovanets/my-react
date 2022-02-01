import React from 'react';

import './detailsEpisode.modules.css';
import Characters from "../Characters/Characters";

const DetailsEpisode = ({details}) => {

    const {air_date,name, episode, characters} = details;

    return (
        <div>
            <div className={'titleEpisode'}>
                <div>EPISODE: {name}</div>
                <div>{air_date}</div>
                <div>{episode}</div>
            </div>
            <div className={'personsList'}>
                {characters.map(character => <Characters persona={character}/>)}
            </div>
        </div>
    );
};

export default DetailsEpisode;