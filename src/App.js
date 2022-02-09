import React from 'react';
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import "./App.css"
import MoviesPage from "./pages/MoviesPage/MoviesPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;