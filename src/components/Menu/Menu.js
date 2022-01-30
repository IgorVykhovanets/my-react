import React from 'react';
import {NavLink} from "react-router-dom";

import './menu.modules.css'

const Menu = () => {
    return (
        <div className={'wrap'}>
            <div className={'links'}>
                <NavLink to={'/'}>Rick and Morty</NavLink>
            </div>
            <div className={'links'}>
                <div className={'pageLinks'}>
                    <NavLink to={'/page1'}>PAGE 1</NavLink>
                    <NavLink to={'/page2'}>PAGE 2</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Menu;