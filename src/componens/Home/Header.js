import React from 'react';

export default function Header(){
    return (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="max-w-xl mt-16 sm:mt-24 md:mx-auto sm:text-center lg:max-w-2xl">
                <h2 className="mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Update Pasar Kripto
                </h2>
                <p className="text-sm text-gray-700 sm:text-lg">
                    Dapatkan update kenaikan dan penurunan harga kripto secara realtime. Terdapat lebih dari 200 kripto yang dapat dipantau
                </p>
            </div>
        </div>
    )
}