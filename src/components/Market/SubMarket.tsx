import React, {useEffect, useState} from 'react';
import { getPair } from '../../api/pairs';
import { getSummary } from '../../api/summaries';
import { getTicker } from '../../api/tickers';
import { Pair } from '../../interfaces/Pairs';
import { Price } from '../../interfaces/Summaries';
import { Ticker } from '../../interfaces/Tickers';
import PriceHR from './PriceHR';
import Loading from '../common/Loading'
import Header from '../common/Header';

interface HeaderProps {
  id?: string;
}

const SubMarket: React.FC<HeaderProps> = ({ id }) => {
  const [ticker, setTicker] = useState<Ticker | null>(null);
  const [price, setPrice] = useState<Price>({});
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const [
        priceResult, 
        tickerResult, 
        pairResult
      ] = await Promise.all([
        getSummary(),
        getTicker(id),
        getPair(),
      ]);
      setPrice(priceResult.prices_24h);
      setTicker(tickerResult.ticker);
      setPairs(pairResult.filter((pair: Pair) => pair.id === id));
      setLoading(false);
    } catch (err) {
      console.log('Error fetching data', err);    
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Loading/>
  }

  if (!ticker || pairs.length === 0) {
    return <Header title={'Not Available'}/>
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

export default SubMarket;