import React, { ChangeEvent, useEffect, useState } from 'react';
import { getSummary } from '../../api/summaries';
import { getPair } from '../../api/pairs';
import { Pair } from '../../interfaces/Pairs';
import { Ticker, Price } from '../../interfaces/Summaries';
import InputSearch from '../common/InputSearch';
import Option from '../common/Option';
import SkeletonCard from './card/SkeletonCard'
import Card from './card/Card';

const Home: React.FC = () => {
  const [ticker, setTicker] = useState<Ticker>({});
  const [price, setPrice] = useState<Price>({});
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const loopLoading = Array.from({ length: 8 });
  const sortingOptions: {value: string; label: string}[] = [
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
    const result = await getSummary();
    setTicker(result.tickers);
    setPrice(result.prices_24h);        
  };

  const getPairs = async () => {
    const result = await getPair();
    setPairs(result.filter((pair: Pair) => pair.base_currency === 'idr'));        
  };

  const fetchData = async () => {
    try {
      await Promise.all([getSummaries(), getPairs()]);
    } catch (err) {
      console.log('Error fetching summaries and pairs', err);    
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword === '') {
      getPairs();
    } else {
      setPairs(pairs.filter((pair: Pair) => ticker[pair.ticker_id].name.toLowerCase().includes((keyword).toLowerCase())));
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
      setPairs([...pairs].sort(sortingFunctions[property]));                
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(getSummaries, 2000);
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="flex flex-col items-center w-full mb-4 sm:flex-row">
        <InputSearch handleSearch={handleSearch} placeholder={"Cari nama kripto"}/>
        <Option handleSorting={handleSorting} options={sortingOptions}/>
      </div>
      <div className="grid gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading 
          ? loopLoading.map((_, index) => <SkeletonCard key={index}/>)
          : pairs.map((item, index) => (
            <Card
              key={index}
              id = {item.id}
              url_logo = {item.url_logo}
              maintenance = {item.is_maintenance}
              suspended = {item.is_market_suspended}
              description = {item.description}
              name = {ticker[item.ticker_id].name }
              price={ticker[item.ticker_id]?.last.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              price_24h={(((ticker[item.ticker_id]?.last - price[item.id]) / price[item.id]) * 100).toFixed(2)}
              volume={ticker[item.ticker_id]?.vol_idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home;