import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from "./pages/home";
import Market from "./pages/market";
import NotFound from "./pages/notFound"
import { store } from "./state/store";

const App: React.FC = () => {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/not-found" element = {<NotFound/>}/>
          <Route path = "/:id" element = {<Market/>}/>
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;