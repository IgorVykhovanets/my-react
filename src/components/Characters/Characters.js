import React, {useEffect, useState} from 'react';

import {characterService} from "../../services/character.service";
import Character from "../Character/Character";
import './characters.modules.css'

const Characters = ({persona}) => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getPerson(persona).then(character => setCharacters([character]));
    } ,[])

    return (
        <div className={'person'}>
            {characters.map(character => <Character key={character.id} details={character}/>)}
        </div>
    );
};

export default Characters;