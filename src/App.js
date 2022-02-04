import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import CarsPage from "./pages/CarsPage/CarsPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;