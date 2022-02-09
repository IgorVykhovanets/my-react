import React from 'react';
import {NavLink} from "react-router-dom";

import './menu.modules.css'

const Menu = () => {
    return (
        <div>
            <div className={'wrapMenu'}>
                <div className={'nameProject'}><NavLink to={'/'}>Project Movies</NavLink></div>
                <div className={'menuMovies'}>
                    <NavLink to={'movies'}>Movies</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;