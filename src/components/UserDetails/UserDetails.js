import React from 'react';

const UserDetails = ({user: {id, name, username, email, phone}, getUserId}) => {
    return (
        <div>
            <div>{id} --- {name} --- {username}</div>
            <div>{email} --- {phone}</div>
            <button onClick={() => getUserId(id)}>getPosts</button>
        </div>
    );
};

export default UserDetails;