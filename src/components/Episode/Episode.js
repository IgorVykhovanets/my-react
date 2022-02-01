import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {episodesService} from "../../services/episodes.service";
import DetailsEpisode from "../DetailsEpisode/DetailsEpisode";

const Episode = () => {

    const {state} = useLocation();

    const [detailEpisode, setDetailEpisode] = useState([]);

    useEffect(() => {
        episodesService.getById(state).then(episode => setDetailEpisode([episode]));
    }, []);


    return (
        <div>
            {detailEpisode.map(episode => <DetailsEpisode key={episode.id} details={episode}/>)}
        </div>
    )
};

export default Episode;