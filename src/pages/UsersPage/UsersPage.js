import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/slice/users.slice";
import User from "../../components/User/User";

const UsersPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    } ,[])

   const {users} = useSelector(state => state['usersReducer']);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;