import React from 'react';

const UserPosts = ({posts:{id,title,body}}) => {
    return (
        <div>
            {id} --- {title} --- {body}
        </div>
    );
};

export default UserPosts;