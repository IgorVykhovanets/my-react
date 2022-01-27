import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import UserDetail from "../../components/UserDetail/UserDetail";

const UserDetailPage = () => {

    const {id} = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        usersService.getById(id).then(user => setUser(user));
    },[id])

    return (
        <div>
            <div>{user && <UserDetail user={user}/>}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default UserDetailPage;