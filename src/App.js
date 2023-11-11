import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Portfolio from './pages/Portfolio';
import NotFound from "./pages/NotFound";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;