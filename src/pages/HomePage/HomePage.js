import React from 'react';
import {Outlet} from 'react-router-dom';

import Menu from "../../components/Menu/Menu";
import './homePage.modules.css'

const HomePage = () => {
    return (
        <div>
            <div>
                <Menu/>
            </div>
            <div className={'listEpisodesBox'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default HomePage;