import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PriceHR from './PriceHR';

interface CardProps {
  id: string;
  url_logo: string;
  maintenance: boolean;
  suspended: boolean;
  description: string;
  name: string;
  price: string;
  price_24h: string;
  volume: string;
}

const Card: React.FC<CardProps> = ({ id, url_logo, maintenance, suspended, description, name, price, price_24h, volume }) => {
  const [isUpdated, setIsUpdated] = useState(false);
  const priceChange24h = parseFloat(price_24h);
  let borderClass = '';

  useEffect(() => {
    setIsUpdated(true);

    const timer = setTimeout(() => {
      setIsUpdated(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [price_24h]);

  if (priceChange24h > 0) {
    borderClass = isUpdated ? 'border-green-300 bg-green-100' : '';
  } else if (priceChange24h < 0) {
    borderClass = isUpdated ? 'border-red-300 bg-red-100' : '';
  } else if (priceChange24h === 0) {
    borderClass = isUpdated ? 'border-slate-300 bg-slate-100' : '';
  }

  if (maintenance || suspended) {
    return (
      <div className={`p-5 duration-300 transform ease-in-out bg-gradient-to-r from-indigo-50 ${borderClass} rounded border-2 opacity-40 cursor-not-allowed hover:opacity-80`}>
        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-full bg-indigo-100">
          <img alt="logo" src={url_logo} className="mx-auto object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12"/>
        </div>
        <div className="flex items-center justify-auto">
          <h6 className="sm:text-md text-sm font-semibold leading-5">
            {description}
          </h6>
          <PriceHR price_24h={price_24h}/>
        </div> 
        <p className="sm:text-sm text-xs font-medium text-gray-900 mb-2">
          {name}
        </p>
        <p className="sm:text-sm text-xs font-medium text-gray-900">
          Harga : {price} IDR
        </p>
        <p className="sm:text-sm text-xs font-medium text-gray-900">
          Volume : {volume} IDR
        </p>
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 bg-opacity-40 text-red-700 font-bold hover:bg-opacity-80 duration-200">
          <div className="flex flex-col justify-center items-center">
            {maintenance ? 'Maintenance' : 'Suspended'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={id} key={id} className={`relative p-5 duration-300 transform bg-gradient-to-r from-indigo-50 ${borderClass} rounded-lg border-2 hover:-translate-y-1`}>
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-full bg-indigo-100">
        <img alt="logo" src={url_logo} className="mx-auto object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12"/>
      </div>
      <div className="flex items-center justify-auto">
        <h6 className="sm:text-md text-sm font-semibold leading-5">
          {description}
        </h6>
        <PriceHR price_24h={price_24h}/>
      </div> 
      <p className="sm:text-sm text-xs font-medium text-gray-900 mb-2">
        {name}
      </p>
      <p className="sm:text-sm text-xs font-medium text-gray-900">
        Harga : {price} IDR
      </p>
      <p className="sm:text-sm text-xs font-medium text-gray-900">
        Volume : {volume} IDR
      </p>
    </Link>
  );
}

export default Card;