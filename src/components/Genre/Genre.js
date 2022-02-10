import React from 'react';
import {Link} from "react-router-dom";

import './genre.modules.css';

const Genre = ({genre: {name, id}}) => {
    return (
        <div>
            <div className={'genreBox'}>
                <Link to={`${name.toLowerCase()}`}>{name}</Link>
            </div>
        </div>
    );
};

export default Genre;