import React from 'react';

import './post.modules.css';

const Post = ({post: {id, title, body}}) => {
    return (
        <div className={'postWrap'}>
            <div>{id}) {title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;