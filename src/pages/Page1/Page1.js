import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodesService} from "../../services/episodes.service";
import Episodes from "../../components/Episodes/Episodes";

const Page1 = () => {

    const [episodes1, setEpisodes1] = useState([]);

    useEffect(() => {
        episodesService.episodesPage1().then(episodes1 => setEpisodes1(episodes1));
    },[])

    return (
        <div>
            {episodes1.map(episode => <Episodes key={episode.id} episodes={episode}/>)}
            <div><Outlet/></div>
        </div>
    );
};

export default Page1;