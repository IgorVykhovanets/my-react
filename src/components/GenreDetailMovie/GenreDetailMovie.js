import React from 'react';


const GenreDetailMovie = ({genre: {name}}) => {
    return (
        <div>
            - {name}
        </div>
    );
};

export default GenreDetailMovie;