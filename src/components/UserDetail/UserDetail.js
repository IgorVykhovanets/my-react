import React from 'react';
import {Link} from "react-router-dom";

const UserDetail = ({user}) => {

    const {id, name, username, email, phone} = user;

    return (
        <div>
            <div>{id} --- {name} --- {username}</div>
            <div>{email} --- {phone}</div>
            <div><button><Link to={'posts'} state={id}>getPost</Link></button></div>
        </div>
    );
};

export default UserDetail;