import React from 'react';

import './character.modules.css'

const Character = ({details: {name, status, species, gender, image}}) => {
    return (
        <div>
            <div className={'imagePerson'}><img src={image} alt=""/></div>
            <div><h2>{name}</h2></div>
            <div>gender: {gender}</div>
            <div>status: {status}</div>
            <div>species: {species}</div>
        </div>
    );
};

export default Character;