import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Detail from "../pages/Detail";

export default function AppRoute() {
    const URL = "crypto-market";

    return (
        <Routes>
            <Route path = {URL} Component = {Home}/>
            <Route path = {URL + '/:id'} Component = {Detail}/>
        </Routes>
    );
}