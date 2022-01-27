import React from 'react';

const Comments = ({comment: {id, name, email, body}}) => {
    return (
        <div>
            <div>{id} --- {name} --- {email}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comments;