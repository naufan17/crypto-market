import React, {useEffect, useState} from 'react';
import axios from '../../config/Api';
import PriceHR from './PriceHR';
import Loading from '../Loading/Loading'
import NotFound from '../NotFound/NotFound';

interface Ticker {
    last: number;
    vol_idr: number;
}

interface Price {
    [key: string]: number;
}

interface Pair {
    id: string;
    url_logo: string;
    description: string;
}

interface HeaderProps {
    id?: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
    const [ticker, setTicker] = useState<Ticker | null>(null);
    const [price, setPrice] = useState<Price>({});
    const [pairs, setPairs] = useState<Pair[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    const getSummaries = async () => {
        const result = await axios.get('summaries')
        setPrice(result.data.prices_24h);
    };

    const getTicker = async () => {
        const result = await axios.get(`ticker/${id}`)
        setTicker(result.data.ticker);
    };

    const getPairs = async () => {
        const result = await axios.get('pairs')
        setPairs(result.data.filter((pair: Pair )=> pair.id === id));
    };

    const fetchData = async () => {
        try {
            await Promise.all([getSummaries(), getTicker(), getPairs()]);
            setLoading(false);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchData();

        const interval = setInterval(() => {
            getSummaries();
            getTicker();
        }, 2000);

        return () => clearInterval(interval)
    }, []);

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    if (!ticker || pairs.length === 0) {
        return (
            <NotFound title={'Not Available'}/>
        )
    }

    return (
        <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="flex flex-col sm:flex-row mt-4 sm:mt-8 justify-between lg:items-center">
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 mb-2 sm:mb-0">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 sm:w-16 sm:h-16">
                        <img alt="logo" src={pairs[0].url_logo} className="mx-auto object-cover rounded-full w-14 h-14 sm:w-16 sm:h-16"/>
                    </div>
                    <div className="flex gap-2 col-span-2 items-center justify-auto">
                        <h3 className="text-lg font-semibold sm:text-xl leading-5">
                            {pairs[0].description}
                        </h3>
                        <PriceHR price_24h={((ticker.last - price[pairs[0].id]) / price[pairs[0].id] * 100).toFixed(2)}/>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="flex flex-col">
                        <h3 className="text-base my-0.5 font-medium sm:text-lg text-gray-900">
                            Harga: {ticker.last.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR
                        </h3>
                        <h3 className="text-base my-0.5 font-medium sm:text-lg text-gray-900">
                            Volume : {ticker.vol_idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;