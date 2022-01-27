import React from 'react';
import {NavLink, Outlet} from "react-router-dom";


const LayoutPage = () => {
    return (
        <div>
            <div className={"wrap"}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default LayoutPage;