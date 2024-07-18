import React from 'react';
import Header from '../components/Home/Header';
import Main from '../components/Home/Home';

const Home: React.FC = () => {      
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Header/>
      <Main/>
    </div>
  );
}

export default Home;