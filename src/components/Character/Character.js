import React from 'react';

import './character.modules.css'

const Character = ({character: {name, status, species, gender, image}}) => {
    return (
        <div>
            <div>
                <div className={'imagePerson'}>
                    <img src={image} alt=""/>
                    <h2>{name}</h2>
                </div>
                <div>status: {status}</div>
                <div>species: {species}</div>
                <div>gender: {gender}</div>
            </div>
        </div>
    );
};

export default Character;