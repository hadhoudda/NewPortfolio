import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;