import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";

import Albums from "../../components/Albums/Albums";

const AlbumsPage = () => {

    const {id} = useParams()

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        usersService.getByIdAlbums(id).then(albums => setAlbums(albums));
    },[id])

    return (
        <div>
            <div>{albums.map(albums => <Albums key={albums.id} albums={albums}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default AlbumsPage;