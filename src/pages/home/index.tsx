import React from 'react';
import Header from '../../components/ui/Header';
import ListCard from './section/ListCard';
import Footer from '../../components/ui/Footer';

const Home: React.FC = () => {      
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Header
        title='Update Pasar Kripto'
        subtitle='Dapatkan update kenaikan dan penurunan harga kripto secara realtime. Terdapat lebih dari 200 kripto yang dapat dipantau'
      />
      <ListCard/>
      <Footer/>
    </div>
  );
}

export default Home;