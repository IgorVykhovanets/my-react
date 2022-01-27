import React from 'react';
import {Link, Outlet} from "react-router-dom";


const LayoutPage = () => {
    return (
        <div>
            <div className={"wrap"}>
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default LayoutPage;