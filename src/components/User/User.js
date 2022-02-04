import React from 'react';

import './user.modules.css'

const User = ({user: {id, name, email}}) => {

    return (
        <div>
            <div className={'user'}>
                {id}) {name} --- {email}
            </div>
        </div>
    );
};

export default User;