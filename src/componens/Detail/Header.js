import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PriceHR from './PriceHR';
import Loading from '../Loading'

export default function Header(id){
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

        const interval = setInterval(() => {
            getSummaries();
        }, 2000);

        return()=>clearInterval(interval)
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                    <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 justify-between lg:items-center">
                        <div className="grid gap-2 grid-cols-2 sm:grid-cols-3">
                            <div className="flex col-span-2 sm:col-auto items-center justify-center w-14 h-14 rounded-full bg-indigo-100 sm:w-16 sm:h-16">
                                <img alt="profil" src={pairs[0].url_logo} className="mx-auto object-cover rounded-full w-14 h-14 sm:w-16 sm:h-16"/>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-lg my-1 font-semibold sm:text-xl leading-5">{pairs[0].description}</h3>
                                <h3 className="text-base my-1 font-medium sm:text-lg text-gray-900">{crypto.name}</h3>
                            </div>
                            <div className="flex flex-col">
                                <PriceHR
                                    price_24h={((crypto.last - price[pairs[0].id]) / price[pairs[0].id] * 100).toFixed(2)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1">
                            <div className="flex flex-col">
                                <h3 className="text-base my-1 font-medium sm:text-lg text-gray-900">Price: {(crypto.last).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR</h3>
                                <h3 className="text-base my-1 font-medium sm:text-lg text-gray-900">Volume : {(crypto.vol_idr).replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR</h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}