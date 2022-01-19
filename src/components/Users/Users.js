import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";

import User from "../User/User";

const Users = ({getUser}) => {

    const [users , setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(users => setUsers(users));
    },[]);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;