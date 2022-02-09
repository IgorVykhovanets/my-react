import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import DetailsMoviePage from "./pages/DetailsMoviePage/DetailsMoviePage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/details'} element={<DetailsMoviePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;