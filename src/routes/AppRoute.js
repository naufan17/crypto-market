import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Market from "../pages/Market";

export default function AppRoute() {
    const URL = "crypto-market";

    return (
        <Routes>
            <Route path = {URL} Component = {Home}/>
            <Route path = {URL + '/:id'} Component = {Market}/>
        </Routes>
    );
}