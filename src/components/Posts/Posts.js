import React, {useEffect, useState} from 'react';
import {postsServices} from "../../services/posts.service";
import Post from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsServices.getAll().then(posts => setPosts(posts));
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;