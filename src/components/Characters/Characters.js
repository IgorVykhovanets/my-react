import React, {useEffect, useState} from 'react';

import {CharactersService} from "../../services/characters.service";
import Character from "../Character/Character";
import './characters.modules.css'

const Characters = ({persona}) => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        CharactersService.getAll(persona).then(person => setPersons([person]));
    }, []);

    return (
        <div className={'person'}>
            {persons.map(person => <Character key={person.id} character={person}/>)}
        </div>
    );
};

export default Characters;