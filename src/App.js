import React from 'react';
import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import './App.css'
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import DetailsEpisodePage from "./pages/DetailsEpisodePage/DetailsEpisodePage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'page1'} element={<Page1/>}/>
                    <Route path={'detailEpisode'} element={<DetailsEpisodePage/>}/>
                    <Route path={'page2'} element={<Page2/>}/>
                    <Route path={'detailEpisode'} element={<DetailsEpisodePage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;