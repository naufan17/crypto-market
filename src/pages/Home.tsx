import React from 'react';
import Header from '../components/ui/Header';
import Main from '../components/home/Home';

const Home: React.FC = () => {      
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Header
        title='Update Pasar Kripto'
        subtitle='Dapatkan update kenaikan dan penurunan harga kripto secara realtime. Terdapat lebih dari 200 kripto yang dapat dipantau'
      />
      <Main/>
    </div>
  );
}

export default Home;