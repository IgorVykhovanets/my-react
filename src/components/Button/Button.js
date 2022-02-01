import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Button = ({to, isNav = false, children}) => {

    const {search} = useLocation();

    return (
        <div>
            <Link to={to}>
                <button className={isNav && search === to ? 'active' : ''}>{children}</button>
            </Link>
        </div>
    );
};

export default Button;