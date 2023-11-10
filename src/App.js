import {  Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Portfolio from './pages/Portfolio';
import Apropos from "./components/Apropos";
import NotFound from "./pages/NotFound";

function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/profil" element={<Apropos/>}/>
            <Route path="/*" element={<NotFound />} /> 
        </Routes>
    </BrowserRouter>
    );
}

export default App;