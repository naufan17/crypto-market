import React from 'react';
import PriceHR from './PriceHR';

export default function Card({ id, url_logo, description, name, price, price_24h, volume }){
    const url = `${id}`;

    return (
        <a href={url} key={id} className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow hover:-translate-y-2">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mb-4 rounded-full bg-indigo-100">
                <img alt="profil" src={url_logo} className="mx-auto object-cover rounded-full w-10 h-10 sm:w-12 sm:h-12"/>
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
        </a>
    )
}