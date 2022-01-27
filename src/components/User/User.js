import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, email} = user;

    return (
        <div>
            <div className={'userList'}>{id} --- {name} --- {email} ---
                <button><Link to={`${id}`} state={user}>DetailUser</Link></button>
                ---
                <button><Link to={`${id}/albums`}>Albums</Link></button>
            </div>
        </div>
    );
};

export default User;