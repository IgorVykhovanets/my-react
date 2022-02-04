import React from 'react';
import {Link} from "react-router-dom";

import './menu.modules.css';

const Menu = () => {
    return (
        <div className={'wrapMenu'}>
            <div><Link to={'/users'}>Users</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div><Link to={'cars'}>Cars</Link></div>
        </div>
    );
};

export default Menu;