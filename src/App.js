import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css'
import LayoutPage from "./pages/LayoutPage/LayoutPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UserDetailPage from "./pages/UserDetailPage/UserDetailPage";
import UserPostPage from "./pages/UserPostPage/UserPostPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";
import PostDetailsPage from "./pages/PostDetails/PostDetailsPage";
import CommentsPage from "./pages/CommentsPages/CommentsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<LayoutPage/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={'photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </div>
    );
};

export default App;