import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {episodesService} from "../../services/episodes.service";
import Episodes from "../../components/Episodes/Episodes";

const Page2 = () => {

    const [episodes2, setEpisodes2] = useState([]);

    useEffect(() => {
        episodesService.episodesPage2().then(episodes => setEpisodes2(episodes));
    },[])

    return (
        <div>
            {episodes2.map(episode => <Episodes key={episode.id} episodes={episode}/>)}
            <div><Outlet/></div>
        </div>
    );
};

export default Page2;