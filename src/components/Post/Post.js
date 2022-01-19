import React from 'react';

const Post = ({post: {id, title, body}}) => {
    return (
        <div>
            {id} --- {title} --- {body}
        </div>
    );
};

export default Post;