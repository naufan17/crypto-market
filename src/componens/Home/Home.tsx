import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from '../../config/Api';
import SkeletonCard from './Card/SkeletonCard'
import Card from './Card/Card';

interface Ticker {
    [key: string]: {
        name: string;
        last: number;
        vol_idr: number;
    };
}

interface Price {
    [key: string]: number;
}

interface Pair {
    id: string;
    base_currency: string;
    ticker_id: string;
    url_logo: string;
    description: string;
}
  
interface SortingOption {
    value: string;
    label: string;
}

const Home: React.FC = () => {
    const [ticker, setTicker] = useState<Ticker>({});
    const [price, setPrice] = useState<Price>({});
    const [pairs, setPairs] = useState<Pair[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const loopLoading = [1, 2, 3, 4, 5, 6, 7, 8];
    const sortingOptions: SortingOption[] = [
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
        const result = await axios.get('summaries')
        setTicker(result.data.tickers);
        setPrice(result.data.prices_24h);
    };

    const getPairs = async () => {
        const result = await axios.get('pairs')
        setPairs(result.data.filter((pair: Pair) => pair.base_currency === 'idr'));
    };

    const fetchData = async () => {
        try {
            await Promise.all([getSummaries(), getPairs()]);
            setLoading(false);
        } catch (e) {
            console.error(e);
        }
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        if (keyword === '') {
            getPairs();
        } else {
            setPairs(pairs.filter(pair => ticker[pair.ticker_id].name.toLowerCase().includes((keyword).toLowerCase())));
        };
    };

    const handleSorting = (e: ChangeEvent<HTMLSelectElement>) => {
        const property = e.target.value;

        const sortingFunctions: { [key: string]: (a: Pair, b: Pair) => number} = {
            'namaAZ': (a, b) => a.id.localeCompare(b.id),
            'namaZA': (a, b) => b.id.localeCompare(a.id),
            'trenTurun': (a, b) => ((ticker[a.ticker_id].last - price[a.id]) / price[a.id]) - ((ticker[b.ticker_id].last - price[b.id]) / price[b.id]),
            'trenNaik': (a, b) => ((ticker[b.ticker_id].last - price[b.id]) / price[b.id]) - ((ticker[a.ticker_id].last - price[a.id]) / price[a.id]),
            'hargaRendah': (a, b) => ticker[a.ticker_id].last - ticker[b.ticker_id].last,
            'hargaTinggi': (a, b) => ticker[b.ticker_id].last - ticker[a.ticker_id].last,
            'volumeRendah': (a, b) => ticker[a.ticker_id].vol_idr - ticker[b.ticker_id].vol_idr,
            'volumeTinggi': (a, b) => ticker[b.ticker_id].vol_idr - ticker[a.ticker_id].vol_idr,
        };

        if (property === '') {
            getPairs();
        } else {
            const sortingFunction = sortingFunctions[property] || getPairs;
            setPairs([...pairs].sort(sortingFunction));                
        }
    };

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            getSummaries();
        }, 2000);

        return () => clearInterval(interval)
    }, []);

    return (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="flex flex-col items-center w-full mb-4 sm:flex-row">
                <input 
                    type="search" 
                    onChange={handleSearch} 
                    placeholder="Cari nama kripto" 
                    required 
                    className="inline-flex w-full sm:h-12 h-10 px-4 mb-3 sm:text-base text-md text-gray-900  bg-transparent border-2 border-indigo-50 rounded appearance-none sm:w-full sm:mr-2 sm:mb-0 focus:border-slate-200 focus:outline-none focus:shadow-outline"
                />
                <select 
                    onChange={handleSorting} 
                    className="inline-flex w-full sm:h-12 h-10 px-2 mb-3 sm:text-base text-md font-medium text-gray-900 transition rounded shadow-sm bg-indigo-50 hover:bg-slate-200 sm:w-full sm:ml-2 sm:mb-0 focus:shadow-outline focus:outline-none"
                >
                    {sortingOptions.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {loading ? (
                <div className="grid gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {loopLoading.map(loading => (
                        <SkeletonCard/>
                    ))}
                </div>
            ) : (
                <div className="grid gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {pairs.map(item => (
                        <Card
                            id = {item.id}
                            url_logo = {item.url_logo}
                            description = {item.description}
                            name = {ticker[item.ticker_id].name }
                            price={ticker[item.ticker_id]?.last.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                            price_24h={(((ticker[item.ticker_id]?.last - price[item.id]) / price[item.id]) * 100).toFixed(2)}
                            volume={ticker[item.ticker_id]?.vol_idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home