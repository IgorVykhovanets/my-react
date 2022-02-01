import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css'
import HomePage from "./pages/HomePage/HomePage";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import Episode from "./components/Episode/Episode";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route index element={<Navigate to={'episodes?page=1'}/>}/>
                    <Route path={'episodes'} element={<EpisodesPage/>}/>
                    <Route path={'episodes/:id/characters'} element={<Episode/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;