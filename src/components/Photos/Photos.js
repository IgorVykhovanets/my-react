import React from 'react';

const Photos = ({photos: {id, title, url}}) => {
    return (
        <div>
            <div className={'photosWrap'}>{id} --- {title} --- <img src={url} alt=""/></div>
        </div>
    );
};

export default Photos;