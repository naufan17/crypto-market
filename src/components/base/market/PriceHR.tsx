import React from 'react';

interface PriceHRProps {
  price_24h: string;
}

const PriceHR: React.FC<PriceHRProps> = ({ price_24h }) => {
  const priceChange = parseFloat(price_24h);
  let textColor = '';
  let bgColor = '';

  if (priceChange > 0) {
    textColor = 'text-green-900';
    bgColor = 'bg-green-200';
  } else if (priceChange < 0) {
    textColor = 'text-red-900';
    bgColor = 'bg-red-200';
  } else {
    textColor = 'text-gray-900';
    bgColor = 'bg-gray-200';
  }

  return (
    <span className={`relative inline-block px-2.5 py-0.5 ml-2 text-md sm:text-lg font-semibold leading-tight ${textColor}`}>
      <span aria-hidden="true" className={`absolute inset-0 opacity-50 rounded-full ${bgColor}`}></span>
      <span className="relative">
        {priceChange> 0 && '+'}
        {price_24h}%
      </span>
    </span>
  )
}

export default PriceHR;