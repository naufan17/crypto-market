import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Loading from '../Loading'

export default function Main(id){
    const [crypto, setCrypto] = useState([]);
    const [price, setPrice] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getSummaries = async () => {
        try{
            const result = await axios.get('https://indodax.com/api/summaries')
            setCrypto(result.data.tickers[id.id]);
            setPrice(result.data.prices_24h);
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    };

    const getPairs = async () => {
        try{
            const result = await axios.get('https://indodax.com/api/pairs', {mode:'cors'})
            setPairs((result.data).filter(ticker => ticker.ticker_id === id.id));
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    };

    useEffect(()=>{
        getSummaries();
        getPairs();

    }, []);

    function priceHR(price_24h){
        if(price_24h > 0){
            return(
                <span className="relative inline-block px-2.5 py-1 ml-2 text-lg sm:text-xl xl:text-2xl font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        +{price_24h}%
                    </span>
                </span>
            )
        }else if(price_24h < 0){
            return(
                <span className="relative inline-block px-2.5 py-1 ml-2 text-lg sm:text-xl xl:text-2xl font-semibold text-red-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {price_24h}%
                    </span>
                </span>
            )
        }else if(price_24h == 0){
            return(
                <span className="relative inline-block px-2.5 py-1 ml-2 text-lg sm:text-xl xl:text-2xl font-semibold text-gray-900 leading-tight">
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
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="flex flex-col sm:flex-row justify-between lg:items-center">
                    <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
                        <div className="flex col-span-2 sm:col-auto items-center justify-center w-14 h-14 rounded-full bg-indigo-100 sm:w-16 sm:h-16 xl:w-20 xl:h-20">
                            <img alt="profil" src={pairs[0].url_logo} className="mx-auto object-cover rounded-full w-14 h-14 sm:w-16 sm:h-16 xl:w-20 xl:h-20"/>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg my-2 font-semibold sm:text-xl xl:text-2xl leading-5">{pairs[0].description}</h3>
                            <h3 className="text-base my-1 font-medium sm:text-lg xl:text-xl text-gray-900">{crypto.name}</h3>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg my-1 sm:text-xl xl:text-2xl">{priceHR(((crypto.last - price[pairs[0].id]) / price[pairs[0].id] * 100).toFixed(2))}</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <div className="flex flex-col">
                            <h3 className="text-base my-1 font-medium sm:text-lg xl:text-xl text-gray-900">Price: {(crypto.last).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR</h3>
                            <h3 className="text-base my-1 font-medium sm:text-lg xl:text-xl text-gray-900">Volume : {(crypto.vol_idr).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}