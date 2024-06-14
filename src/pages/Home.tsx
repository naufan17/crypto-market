import React from 'react';
import Header from '../componens/Home/Header';
import Main from '../componens/Home/Home';

const Home: React.FC = () => {      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <Header/>
            <Main/>
        </div>
    );
}

export default Home;