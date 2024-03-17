import React from 'react';

export default function Card({id, url_logo, description, name, price, price_24h, volume}){
    const url = `crypto-market/${id}`;

    function priceHR(price_24h){
        if(price_24h > 0){
            return(
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        +{price_24h}%
                    </span>
                </span>
            )
        }else if(price_24h < 0){
            return(
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-red-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {price_24h}%
                    </span>
                </span>
            )
        }else if(price_24h == 0){
            return(
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-gray-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-gray-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {price_24h}%
                    </span>
                </span>
            )
        }
    }

    return (
        <a href={url} className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow hover:-translate-y-2">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-full bg-indigo-100">
                <img alt="profil" src={url_logo} className="mx-auto object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12"/>
            </div>
            <div className="flex items-center justify-auto">
                <h6 className="sm:text-md text-sm font-semibold leading-5">
                    {description}
                </h6>
                <p>{priceHR(price_24h)}</p>
            </div> 
            <p className="sm:text-sm text-xs font-medium text-gray-900 mb-2">
                {name}
            </p>
            <p className="sm:text-sm text-xs font-medium text-gray-900">
                Price : {price} IDR
            </p>
            <p className="sm:text-sm text-xs font-medium text-gray-900">
                Volume : {volume} IDR
            </p>
        </a>
    )
}