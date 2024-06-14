import React from 'react';

interface PriceHRProps {
    price_24h: string;
}

const PriceHR: React.FC<PriceHRProps> = ({ price_24h }) => {
    const priceChange = parseFloat(price_24h);
    
    return (
        <>
            {priceChange > 0 && (
                <span className="relative inline-block px-2.5 py-0.5 ml-2 text-md sm:text-lg font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                    <span className="relative">
                        +{price_24h}%
                    </span>
                </span>
            )}

            {priceChange < 0 && (
                <span className="relative inline-block px-2.5 py-0.5 ml-2 text-md sm:text-lg font-semibold text-red-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                    <span className="relative">
                        {price_24h}%
                    </span>
                </span>
            )}

            {priceChange === 0 && (
                <span className="relative inline-block px-2.5 py-0.5 ml-2 text-md sm:text-lg font-semibold text-gray-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                    <span className="relative">
                        {price_24h}%
                    </span>
                </span>
            )}
        </>
    )
}

export default PriceHR;