import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Market from "../pages/Market";
import NotFound from "../pages/NotFound"

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/:id" element = {<Market/>}/>
      <Route path = "*" element = {<NotFound/>}/>
    </Routes>
  );
}

export default AppRoute;