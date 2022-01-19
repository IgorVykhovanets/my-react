import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postService} from "./services/post.service";
import './App.css';

const App = () => {

    const [user, setUsers] = useState(null);

    const getUser = (user) => {
        setUsers(user)
    }

    const getUserId = (id) => {
        postService.getUserId(id).then(value => setPosts(value));
    }

    const [posts, setPosts] = useState([]);


    return (
        <div>
            <div className={'wrap'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            <hr/>
            <div>
                {!!posts.length && <Posts posts={posts}/>}
            </div>
        </div>
    );
};

export default App;