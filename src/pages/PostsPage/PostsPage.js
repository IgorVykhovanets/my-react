import React, {useEffect, useState} from 'react';
import {Outlet, Link} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(posts => setPosts(posts));
    } ,[])

    return (
        <div>
            <div className={'postWrap'}>
                <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
                <div><Outlet/></div>
            </div>
        </div>
    );
};

export default PostsPage;