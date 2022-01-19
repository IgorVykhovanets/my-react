import React from 'react';

const Comment = ({comment: {id, name, body}}) => {
    return (
        <div>
            {id} --- {name} --- {body}
        </div>
    );
};

export default Comment;