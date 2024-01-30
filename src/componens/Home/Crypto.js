import React from 'react';

export default function Crypto({url_logo, description, price, name, harga, volume}){

    const getPriceColor = (prices) => {
        if (prices > 0) return 'green';
        if (prices < 0) return 'red';
        return 'gray';
    };

    const renderPriceHR = (prices) => {
        const colorClass = getPriceColor(prices);
        return (
            <span className={`relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold leading-tight text-${colorClass.split('-')[0]}-900`}>
                <span aria-hidden="true" className={`absolute inset-0 bg-${colorClass.split('-')[0]}-200 opacity-50 rounded-full`}></span>
                <span className="relative">{prices}%</span>
            </span>
        );
    };

    return (
        <div className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow-sm shadow- hover:-translate-y-2">
            <div className="flex items-center justify-center sm:w-12 w-10 sm:h-12 h-10 mb-4 rounded-full bg-indigo-50">
                <img alt="profil" src={url_logo} className="mx-auto object-cover rounded-full h-10 w-10"/>
            </div>
            <div className="flex items-center justify-auto">
                <h6 className="sm:text-md text-sm font-semibold leading-5">
                    {description}
                </h6>
                <p>{renderPriceHR(price)}</p>
            </div> 
            <p className="sm:text-sm text-xs font-medium text-gray-900 mb-2">
                {name}
            </p>
            <p className="sm:text-sm text-xs font-medium text-gray-900">
                Harga : {harga} IDR
            </p>
            <p className="sm:text-sm text-xs font-medium text-gray-900">
                Volume : {volume} IDR
            </p>
        </div>
    )
}