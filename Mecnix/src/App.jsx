import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./page/Landingpage/Landingpage";
import BlogPage from "./page/blog/BlogPage";
import './App.css';


function ROUTER() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/blog" element={<BlogPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default ROUTER;