import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from "./routes/AppRoute";

const App: React.FC = () => {
    return (
        <Router>
            <AppRoute/>
        </Router>
    );
}

export default App;