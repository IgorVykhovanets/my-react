import React from 'react';

const User = ({user: {id, name, username}}) => {
    return (
        <div>
            {id} --- {name} --- {username}
        </div>
    );
};

export default User;