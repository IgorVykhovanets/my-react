import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {episodesService} from "../../services/episodes.service";
import Episodes from "../../components/Episodes/Episodes";
import Paginator from "../../components/Paginator/Paginator";

const EpisodesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [episodes, setEpisodes] = useState([]);
    const [info, setInfo] = useState({});

    useEffect(() => {

        if (!searchParams.get('page')) {
            setSearchParams.get({page: '1'});
        }

        const page = searchParams.get('page');

        episodesService.getAll(page).then(episodes => {
            setEpisodes([...episodes.results]);
            setInfo({...episodes.info});
        });

    }, [searchParams]);


    return (
        <div>
            <div>
                <Paginator info={info}/>
            </div>
            <div>
                {episodes.map(episodes => <Episodes key={episodes.id} episode={episodes}/>)}
            </div>
        </div>
    );
};

export default EpisodesPage;