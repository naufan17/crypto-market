import React from 'react';
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
  if (maintenance || suspended) {
    return (
      <div className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow opacity-40 cursor-not-allowed hover:opacity-80">
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
    <Link to={id} key={id} className="relative p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow hover:-translate-y-2">
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
  )
}

export default Card;