import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Content(){
    const [crypto, setCrypto] = useState([]);
    const [price, setPrice] = useState([]);
    const [pairs, setPairs] = useState([]);

    const getSummaries = async () => {
        try{
            const result = await axios.get('https://indodax.com/api/summaries')
            setCrypto(result.data.tickers);
            setPrice(result.data.prices_24h);
        }catch(e){
            console.log(e.message);
        }
    };

    const getPairs = async () => {
        try{
            const result = await axios.get('https://indodax.com/api/pairs', {mode:'cors'})
            setPairs((result.data).filter(ticker => ticker.base_currency === "idr"));
        }catch(e){
            console.log(e.message);
        }
    };

    const handleSearch = (e) => {
        const keyword = e.target.value;
        if(keyword === ''){
            getPairs();
        }else{
            setPairs(pairs.filter(ticker => crypto[ticker.ticker_id].name.toLowerCase().includes((e.target.value).toLowerCase())));
        };
    };

    const handleSorting = (e) => {
        const property = e.target.value;
        if(property === ''){
            getPairs();
        }else if(property === 'namaAZ'){
            pairs.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
        }else if(property === 'namaZA'){
            pairs.sort((a,b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 1 : 0));
        }else if(property === 'trenTurun'){
            pairs.sort((a,b) => (((crypto[a.ticker_id].last - price[a.id])/ price[a.id]) - ((crypto[b.ticker_id].last - price[b.id])/ price[b.id])));
        }else if(property === 'trenNaik'){
            pairs.sort((a,b) => (((crypto[b.ticker_id].last - price[b.id])/ price[b.id]) - ((crypto[a.ticker_id].last - price[a.id])/ price[a.id])));
        }else if(property === 'hargaRendah'){
            pairs.sort((a,b) => (crypto[a.ticker_id].last - crypto[b.ticker_id].last));
        }else if(property === 'hargaTinggi'){
            pairs.sort((a,b) => (crypto[b.ticker_id].last - crypto[a.ticker_id].last));
        }else if(property === 'volumeRendah'){
            pairs.sort((a,b) => (crypto[a.ticker_id].vol_idr - crypto[b.ticker_id].vol_idr));
        }else if(property === 'volumeTinggi'){
            pairs.sort((a,b) => (crypto[b.ticker_id].vol_idr - crypto[a.ticker_id].vol_idr));
        }
    };

    useEffect(()=>{
        getSummaries();
        getPairs();
        const interval = setInterval(() => {
            getSummaries();
        }, 3300);

        return()=>clearInterval(interval)
    }, []);

    function priceHR(prices){
        if(prices > 0){
            return(
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-green-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        +{prices}%
                    </span>
                </span>
            )
        }else if(prices < 0){
            return(
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-red-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {prices}%
                    </span>
                </span>
            )
        }else if(prices == 0){
            return(
                <span className="relative inline-block px-2 py-1 ml-2 sm:text-md text-sm font-semibold text-gray-900 leading-tight">
                    <span aria-hidden="true" className="absolute inset-0 bg-gray-200 opacity-50 rounded-full">
                    </span>
                    <span className="relative">
                        {prices}%
                    </span>
                </span>
            )
        }
    }

    return (
        <div className="">
            <div className="flex flex-col items-center w-full mb-4 sm:flex-row">
                <input type="search" onChange={handleSearch} placeholder="Cari nama kripto" required className="flex-grow w-full sm:h-12 h-10 px-4 mb-3 sm:text-base text-md text-gray-900  bg-transparent border-2 border-indigo-50 rounded appearance-none sm:w-full sm:mr-2 sm:mb-0 focus:border-slate-200 focus:outline-none focus:shadow-outline"/>
                <select onChange={handleSorting} className="inline-flex w-full sm:h-12 h-10 px-2 mb-3 sm:text-base text-md font-medium text-gray-900 transition rounded shadow-sm bg-indigo-50 hover:bg-slate-200 sm:w-full sm:ml-2 sm:mb-0 focus:shadow-outline focus:outline-none">
                    <option value="">Urutkan</option>
                    <option value="namaAZ">Nama A-Z</option>
                    <option value="namaZA">Nama Z-A</option>
                    <option value="trenNaik">Tren Harga Naik</option>
                    <option value="trenTurun">Tren Harga Turun</option>
                    <option value="hargaRendah">Harga Rendah</option>
                    <option value="hargaTinggi">Harga Tinggi</option>
                    <option value="volumeRendah">Volume Rendah</option>
                    <option value="volumeTinggi">Volume Tinggi</option>
                </select>
            </div>
            <div className="grid gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {pairs.map(item => 
                <div className="p-5 duration-300 transform bg-gradient-to-r from-indigo-50 border rounded shadow-sm shadow- hover:-translate-y-2">
                    <div className="flex items-center justify-center sm:w-12 w-10 sm:h-12 h-10 mb-4 rounded-full bg-indigo-50">
                        <img alt="profil" src={item.url_logo} className="mx-auto object-cover rounded-full h-10 w-10"/>
                    </div>
                    <div className="flex items-center justify-auto">
                        <h6 className="sm:text-md text-sm font-semibold leading-5">
                            {item.description}
                        </h6>
                        <p>{ priceHR(((crypto[item.ticker_id].last - price[item.id]) / price[item.id] * 100).toFixed(2)) }</p>
                    </div> 
                    <p className="sm:text-sm text-xs font-medium text-gray-900 mb-2">
                        { crypto[item.ticker_id].name }
                    </p>
                    <p className="sm:text-sm text-xs font-medium text-gray-900">
                        Harga : { (crypto[item.ticker_id].last).replace(/\B(?=(\d{3})+(?!\d))/g, ".") } IDR
                    </p>
                    <p className="sm:text-sm text-xs font-medium text-gray-900">
                        Volume : { (crypto[item.ticker_id].vol_idr).replace(/\B(?=(\d{3})+(?!\d))/g, ".") } IDR
                    </p>
                </div>
                )}
            </div>
        </div>
    )
}