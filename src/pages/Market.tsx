import React from 'react';
import { useParams } from 'react-router-dom';
import SubMarket from '../components/market/SubMarket';
import Main from '../components/market/Market';
import Trade from '../components/market/Trade';

const Market: React.FC = () => {
  const {id} = useParams();

  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <SubMarket id = {id}/>
      <Main id = {id}/>
      <Trade id = {id}/>
    </div>
  );
}

export default Market;