import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderMarket from './section/headerMarket/HeaderMarket';
import Main from './section/Market';
import Trade from './section/Trade';
import Footer from '../../components/common/Footer';

const Market: React.FC = () => {
  const {id} = useParams();

  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <HeaderMarket id = {id}/>
      <Main id = {id}/>
      <Trade id = {id}/>
      <Footer/>
    </div>
  );
}

export default Market;