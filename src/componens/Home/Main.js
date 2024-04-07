import React, {useEffect, useState} from 'react';
import axios from '../../config/Api';
import SkeletonCard from './Card/SkeletonCard'
import Card from './Card/Card';

export default function Main(){
    const [crypto, setCrypto] = useState([]);
    const [price, setPrice] = useState([]);
    const [pairs, setPairs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const loopLoading = [1, 2, 3, 4, 5, 6, 7, 8];
    const sortingOptions = [
        { value: '', label: 'Urutkan' },
        { value: 'namaAZ', label: 'Nama A-Z' },
        { value: 'namaZA', label: 'Nama Z-A' },
        { value: 'trenNaik', label: 'Tren Harga Naik' },
        { value: 'trenTurun', label: 'Tren Harga Turun' },
        { value: 'hargaRendah', label: 'Harga Rendah' },
        { value: 'hargaTinggi', label: 'Harga Tinggi' },
        { value: 'volumeRendah', label: 'Volume Rendah' },
        { value: 'volumeTinggi', label: 'Volume Tinggi' }
    ];

    const getSummaries = async () => {
        try{
            const result = await axios.get('summaries')
            setCrypto(result.data.tickers);
            setPrice(result.data.prices_24h);
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setLoading(false);
        }
    };

    const getPairs = async () => {
        try{
            const result = await axios.get('pairs', {mode:'cors'})
            setPairs((result.data).filter(ticker => ticker.base_currency === "idr"));
            setLoading(false);
        }catch(e){
            console.log(e.message);
            setLoading(false);
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
        setLoading(true);
        const property = e.target.value;

        const sortingFunctions = {
            '': getPairs,
            'namaAZ': (a, b) => a.id.localeCompare(b.id),
            'namaZA': (a, b) => b.id.localeCompare(a.id),
            'trenTurun': (a, b) => ((crypto[a.ticker_id].last - price[a.id]) / price[a.id]) - ((crypto[b.ticker_id].last - price[b.id]) / price[b.id]),
            'trenNaik': (a, b) => ((crypto[b.ticker_id].last - price[b.id]) / price[b.id]) - ((crypto[a.ticker_id].last - price[a.id]) / price[a.id]),
            'hargaRendah': (a, b) => crypto[a.ticker_id].last - crypto[b.ticker_id].last,
            'hargaTinggi': (a, b) => crypto[b.ticker_id].last - crypto[a.ticker_id].last,
            'volumeRendah': (a, b) => crypto[a.ticker_id].vol_idr - crypto[b.ticker_id].vol_idr,
            'volumeTinggi': (a, b) => crypto[b.ticker_id].vol_idr - crypto[a.ticker_id].vol_idr,
        };
    
        const sortingFunction = sortingFunctions[property] || getPairs;
        pairs.sort(sortingFunction);
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
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="flex flex-col items-center w-full mb-4 sm:flex-row">
                <input type="search" onChange={handleSearch} placeholder="Cari nama kripto" required className="inline-flex w-full sm:h-12 h-10 px-4 mb-3 sm:text-base text-md text-gray-900  bg-transparent border-2 border-indigo-50 rounded appearance-none sm:w-full sm:mr-2 sm:mb-0 focus:border-slate-200 focus:outline-none focus:shadow-outline"/>
                <select onChange={handleSorting} className="inline-flex w-full sm:h-12 h-10 px-2 mb-3 sm:text-base text-md font-medium text-gray-900 transition rounded shadow-sm bg-indigo-50 hover:bg-slate-200 sm:w-full sm:ml-2 sm:mb-0 focus:shadow-outline focus:outline-none">
                    {sortingOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {isLoading ? (
                <div className="grid gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {loopLoading.map(loading =>
                        <SkeletonCard/>
                    )}
                </div>
            ) : (
                <div className="grid gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {pairs.map(item => 
                        <Card
                            id = {item.ticker_id}
                            url_logo = {item.url_logo}
                            description = {item.description}
                            name = {crypto[item.ticker_id].name }
                            price = {(crypto[item.ticker_id].last).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            price_24h = {((crypto[item.ticker_id].last - price[item.id]) / price[item.id] * 100).toFixed(2)}
                            volume = {(crypto[item.ticker_id].vol_idr).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        />
                    )}
                </div>
            )}
        </div>
    )
}