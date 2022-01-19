import React, {useEffect, useState} from 'react';

import {userServices} from "../../services/users.service";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userServices.getAll().then(users => setUsers(users));
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
};

export default Users;