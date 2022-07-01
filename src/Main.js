import React from 'react';
import Content from './Content';

export default function Main(){
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
                    Update Pasar Kripto
                </h2>
                <p className="text-sm text-gray-700 sm:text-lg">
                    Dapatkan update kenaikan dan penurunan harga kripto secara realtime. Terdapat lebih dari 200 kripto yang dapat dipantau
                </p>
            </div>
            <Content/>
        </div>
    )
}