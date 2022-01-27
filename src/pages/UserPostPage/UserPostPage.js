import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {usersService} from "../../services/users.service";
import UserPosts from "../../components/UserPosts/UserPosts";

const UserPostPage = () => {

    const {state} = useLocation();

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        usersService.getByPostId(state).then(posts => setUserPosts(posts));
    }, [state]);

    console.log(userPosts)

    return (
        <div>
            {userPosts.map(posts => <UserPosts key={posts.id} posts={posts}/>)}
        </div>
    );
};

export default UserPostPage;