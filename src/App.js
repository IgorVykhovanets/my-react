import React from 'react';
import {Routes, Route} from "react-router-dom";

import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import DetailsMoviePage from "./pages/DetailsMoviePage/DetailsMoviePage";
import GenresPage from "./pages/GenresPage/GenresPage";
import MovieGenrePage from "./pages/MoviesGenrePage/MovieGenrePage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/details'} element={<DetailsMoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'genres/:name'} element={<MovieGenrePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;