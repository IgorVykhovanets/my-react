import React, {useEffect, useState} from 'react';

import Users from "./components/Users/Users";
import Forms from "./components/Forms/Forms";
import {userService} from "./services/userService";

const App = () => {

    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(user => {
            setUsers(user);
            setFilteredUsers([...user]);
        })
    } ,[])

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.includes(data.name));
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.includes(data.username));
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.includes(data.email));
        }
        setFilteredUsers(filterArr);

    };

    return (
        <div>
            <Forms getFilter={getFilter}/>
            <hr/>
            <Users users={filteredUsers}/>
        </div>
    );
};

export default App;