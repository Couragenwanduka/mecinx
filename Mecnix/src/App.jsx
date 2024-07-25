import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage/Landingpage";
import './App.css';


function ROUTER() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default ROUTER;