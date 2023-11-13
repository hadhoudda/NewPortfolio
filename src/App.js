import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Portfolio from './pages/Portfolio';
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;