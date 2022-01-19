import React from 'react';

const User = ({user,getUser}) => {

    const {id, name, email} = user;

    return (
        <div>
            {id} --- {name} --- {email} --- <button onClick={()=> getUser(user)}>getDetails</button>
        </div>
    );
};

export default User;