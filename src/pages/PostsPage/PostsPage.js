import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/slice/posts.slice";
import Post from "../../components/Post/Post";


const PostsPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])

    const {posts} = useSelector(state => state['postsReducer']);


    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;