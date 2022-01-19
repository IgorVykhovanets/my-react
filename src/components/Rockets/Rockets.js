import React, {useEffect, useState} from 'react';

import {rocketsService} from "../../services/rockets.service";
import Rocket from "../Rocket/Rocket";

const Rockets = () => {

    const [rockets, setRockets] = useState([]);

    useEffect(() => {
        rocketsService.getAll().then(rockets => setRockets(rockets.filter(rocket => rocket.launch_year !== '2020')));
    }, []);

    return (
        <div>
            {rockets.map(rocket => <Rocket key={rocket.flight_number} rocket={rocket}/>)}
        </div>
    );
};

export default Rockets;