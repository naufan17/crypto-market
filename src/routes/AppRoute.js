import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Detail from "../pages/Detail";

export default function AppRoute() {
    return (
        <Routes>
            <Route path="crypto-market" Component={Home}/>
            <Route path="crypto-market/:id" Component={Detail}/>
        </Routes>
    );
}