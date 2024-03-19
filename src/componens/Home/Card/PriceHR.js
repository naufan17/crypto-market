import React from 'react';

export default function PriceHR({price_24h}){
    return (
        <>
            {price_24h > 0 && (
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">+{price_24h}%</span>
                </span>
            )}

            {price_24h < 0 && (
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-red-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                    <span className="relative">{price_24h}%</span>
                </span>
            )}

            {price_24h === 0 && (
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-gray-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                    <span className="relative">{price_24h}%</span>
                </span>
            )}
        </>
    )
}