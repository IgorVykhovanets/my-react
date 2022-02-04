import React from 'react';

import './comments.modules.css'

const Comment = ({comment: {id, name, body}}) => {
    return (
        <div>
            <div className={'commentsWrap'}>
                {id} --- {name} --- {body}
            </div>
        </div>
    );
};

export default Comment;