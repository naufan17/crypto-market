/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pair } from '../../../types/Pairs';
import InputSearch from '../../../components/ui/common/InputSearch';
import Option from '../../../components/ui/common/Option';
import Skeleton from '../../../components/ui/card/Skeleton';
import Card from '../../../components/ui/card/Card';
import { RootState, AppDispatch } from '../../../state/store';
import { fetchSummary, fetchPair } from '../../../state/allCrypto/allCryptoThunk';
import { setPair } from '../../../state/allCrypto/allCryptoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ListCard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loopLoading = Array.from({ length: 8 });
  const [visibleCount, setVisibleCount] = useState(40);
  
  const {
    ticker,
    price,
    pair,
    loading
  } = useSelector((state: RootState) => state.allCrypto);
  
  const sortingOptions: {value: string; label: string, icon?: any}[] = [
    { value: '', label: 'Urutkan', },
    { value: 'namaAZ', label: 'Nama A-Z' },
    { value: 'namaZA', label: 'Nama Z-A' },
    { value: 'trenNaik', label: 'Tren Harga Naik'  },
    { value: 'trenTurun', label: 'Tren Harga Turun' },
    { value: 'hargaRendah', label: 'Harga Rendah' },
    { value: 'hargaTinggi', label: 'Harga Tinggi' },
    { value: 'volumeRendah', label: 'Volume Rendah' },
    { value: 'volumeTinggi', label: 'Volume Tinggi' }
  ];

  useEffect(() => {
    dispatch(fetchSummary());
    dispatch(fetchPair());

    const interval = setInterval(() => {
      dispatch(fetchSummary())
    }, 10000);

    return () => clearInterval(interval)
  }, [dispatch]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    if (keyword === '') {
      dispatch(fetchPair());
    } else {
      dispatch(setPair(pair.filter((pair: Pair) => ticker[pair.ticker_id].name.toLowerCase().includes((keyword).toLowerCase()))));
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
      dispatch(fetchPair());
    } else {
      dispatch(setPair([...pair].sort(sortingFunctions[property])));                
    }
  };

  const loadMoreData = () => {
    setVisibleCount((prevCount) => prevCount + 40)
  };

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
      <div className="grid gap-3 sm:gap-5 mb-3 sm:mb-5 grid-cols-1 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center">
          <InputSearch handleSearch={handleSearch} placeholder={"Cari nama kripto"}/>
        </div>
        <div className='flex flex-row items-center justify-between'>
          <p className="text-base sm:text-lg font-semibold text-slate-800">
            {pair.length} Kripto
          </p>
          <Option handleSorting={handleSorting} options={sortingOptions}/>
        </div>
      </div>
      <div className="grid gap-3 sm:gap-5 mb-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading 
          ? loopLoading.map((_, index) => <Skeleton key={index}/>)
          : pair.slice(0, visibleCount).map((item: Pair, index: number) => (
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
      {visibleCount < pair.length && (
        <div className="flex p-2 items-center justify-center">
          <button onClick={loadMoreData} className="inline-flex items-center text-sm sm:text-base font-semibold text-slate-800 hover:text-slate-600">
            Muat Lebih Banyak 
            <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-slate-800 hover:text-slate-600"/>
          </button>
        </div>
      )}
    </div>
  )
}

export default ListCard;