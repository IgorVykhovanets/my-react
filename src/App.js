import React from 'react';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
            <div>
                <Users/>
                <hr/>
                <Posts/>
                <hr/>
                <Comments/>
            </div>
        </div>
    );
};

export default App;