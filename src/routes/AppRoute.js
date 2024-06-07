import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Market from "../pages/Market";

export default function AppRoute() {
    return (
        <Routes>
            <Route path = "/" Component = {Home}/>
            <Route path = "/:id" Component = {Market}/>
        </Routes>
    );
}