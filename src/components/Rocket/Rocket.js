import React from 'react';

import './Rocket.css'

const Rocket = ({rocket: {mission_name, launch_year, links: {mission_patch_small}}}) => {
    return (
        <div className={'wrap'}>
            <div className={'name'}>{mission_name} <br/> <div className={'year'}>{launch_year}</div></div>
             <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Rocket;