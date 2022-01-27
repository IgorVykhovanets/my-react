import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import User from "../../components/User/User";

const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(users => setUsers(users));
    },[])

    return (
        <div>
            <div className={'userPageWrap'}>
                <div>{users.map(user => <User key={user.id} user={user}/>)}</div>
                <div className={'detailUser'}><Outlet/></div>
            </div>
        </div>
    );
};

export default UsersPage;