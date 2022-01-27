import React from 'react';
import {Link} from "react-router-dom";

const Albums = ({albums}) => {

    const {id, title} = albums;

    return (
        <div>
            <div>{id} --- {title}</div>
            <div><button><Link to={`photos`}>Photos</Link></button></div>
        </div>
    );
};

export default Albums;