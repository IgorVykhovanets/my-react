import React from 'react';

const Post = ({post: {id, title, body}}) => {
    return (
        <div>
            <div>
                {id} --- {title}
                <div>{body}</div>
            </div>
        </div>
    )
};

export default Post;