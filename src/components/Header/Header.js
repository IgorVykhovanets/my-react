import React from 'react';
import {NavLink, Link} from "react-router-dom";

import './header.modules.css';

const Header = () => {
    return (
        <div>
            <div className={'wrapHeader'}>
                <div className={'nameProject'}>
                    <Link to={'/'}>Movies</Link>
                    <Link to={'/'}>Project</Link>
                </div>
                <div className={'menuHeader'}>
                    <NavLink to={'movies'}>Movies</NavLink>
                    <NavLink to={'genres'}>Genres</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;