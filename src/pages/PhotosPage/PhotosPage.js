import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Photos from "../../components/Photos/Photos";

const PhotosPage = () => {

    const {id} = useParams()

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        albumsService.getPhotoById(id).then(photos => setPhotos(photos));
    } , [id])

    return (
        <div>
            {photos.map(photos => <Photos key={photos.id} photos={photos}/>)}
        </div>
    );
};

export default PhotosPage;