import React from 'react';
import {Link} from "react-router-dom";

import './menu.modules.css'

const Menu = () => {
    return (
        <div>
            <div className={'wrap'}>
                <div className={'links'}><Link to={'/'}>Rick and Morty</Link></div>
            </div>
        </div>
    );
};

export default Menu;