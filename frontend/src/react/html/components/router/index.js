import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../../pages/Home";
import Biographie from "../../pages/Biographie";
import Formation from "../../pages/Formation";
import Contact from "../../pages/Contact";
import NotFound from "../../pages/NotFound";

import Experience from "../../components/experience";
import School from "../../components/school";

import Navbar from "../Navbar";
import Footer from "../Footer";



const index = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/accueil" element={<Home/>}/>
                <Route path="/a-propos" element={<Biographie/>}/>
                <Route path="/mes-formations" element={<Formation/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/experiences" element={<Experience/>}/>
                <Route path="/scolaires" element={<School/>}/>
                <Route element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default index;