import React from 'react';

import Characters from "../Characters/Characters";
import './detailsEpisode.modules.css'

const DetailsEpisode = ({episodes}) => {

    const {name, air_date, episode, characters} = episodes;

    return (
        <div>
            <div className={'titleEpisode'}>
                <h2>
                    <div>EPISODE: {name}</div>
                    <div>{air_date}</div>
                    <div>{episode}</div>
                </h2>
            </div>
            <div className={'personsList'}>
                {characters.map(character => <Characters key={character.id} persona={character}/>)}
            </div>
        </div>
    );
};

export default DetailsEpisode;