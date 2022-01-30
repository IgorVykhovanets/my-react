import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {episodesService} from "../../services/episodes.service";
import DetailsEpisode from "../../components/DetailsEpisode/DetailsEpisode";

const DetailsEpisodePage = () => {

    const {state} = useLocation();

    const [detailEpisode, setDetailEpisode] = useState([]);

    useEffect(() => {
        episodesService.detailsEpisodePage(state).then(episode => setDetailEpisode([episode]));
    }, [])

    return (
        <div>
            {detailEpisode.map(episode => <DetailsEpisode key={state} episodes={episode}/>)}
        </div>
    );
};

export default DetailsEpisodePage;