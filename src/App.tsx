import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Market from "./pages/market";
import NotFound from "./pages/notFound"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/:id" element = {<Market/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;