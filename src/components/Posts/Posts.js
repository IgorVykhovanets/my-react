import React from 'react';

import Post from "../Post/Post";

const Posts = ({posts}) => {
    return (
        <div>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    )
};

export default Posts;