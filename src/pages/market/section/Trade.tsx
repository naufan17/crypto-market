import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import Skeleton from '../../../components/ui/trade/Skeleton';
import { RootState, AppDispatch } from '../../../state/store';
import { fetchTrades } from '../../../state/tradeCrypto/tradeCryptoThunk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface TradeProps {
  id?: string;
}

const Trade: React.FC<TradeProps> = ({ id }) => {
   const dispatch = useDispatch<AppDispatch>();
   const { trade, loading } = useSelector((state: RootState) => state.tradeCrypto);
   const [visibleCount, setVisibleCount] = useState(10);
   const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    dispatch(fetchTrades({ id }));

    const interval = setInterval(() => {
      dispatch(fetchTrades({ id }))
    }, 20000);

    return () => clearInterval(interval)
  }, [dispatch, id]);

  useEffect(() => {
    setIsUpdated(true);

    const timer = setTimeout(() => {
      setIsUpdated(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [trade]);

  const loadMoreData = () => {
    setVisibleCount((prevCount) => prevCount + 10)
  };

  if (loading) {
    return <Skeleton/>;
  }

  if (trade.length === 0) {
    return <div>No ticker data available.</div>;
  }

  return (
    <div className="relative px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8"> 
      <div className="flex flex-row mb-4 md:mb-8 justify-between">
        <div className="flex">
          <h2 className="max-w-md font-sans text-xl font-bold  text-gray-800 sm:text-2xl">
            Aktivitas Market
          </h2>
        </div>
      </div>
      <table className="w-full">
        <thead className='bg-slate-200 text-sm sm:text-base text-gray-800'>
          <tr>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Waktu
            </th>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Harga
            </th>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Jumlah
            </th>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center font-medium font-sans tracking-wider">
              Jenis
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {trade.slice(0, visibleCount).map((item, index) => (
            <tr key={index} className={`transition duration-300 ease-in-out ${isUpdated && item.type === 'buy' ? 'bg-green-100' : ''} ${isUpdated && item.type === 'sell' ? 'bg-red-100' : ''}`}>
              <td className="px-4 sm:px-6 py-3 sm:py-4 text-center font-normal font-sans text-sm sm:text-base text-gray-800">
                {format(new Date (parseInt(item.date) * 1000), 'dd-MM-yyyy HH:mm:ss')}
              </td>
              <td className="px-4 sm:px-6 py-3 sm:py-4 text-center font-normal font-sans text-sm sm:text-base text-gray-800">
                {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} IDR
              </td>
              <td className="px-4 sm:px-6 py-3 sm:py-4 text-center font-normal font-sans text-sm sm:text-base text-gray-800">
                {item.amount}
              </td>
              <td className={`px-4 sm:px-6 py-3 sm:py-4 text-center font-semibold font-sans text-sm sm:text-base text-gray-800 ${item.type === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibleCount < trade.length && (
        <div className="flex p-4 items-center justify-center">
          <button onClick={loadMoreData} className="inline-flex items-center text-sm sm:text-base font-semibold text-slate-800 hover:text-slate-600">
            Muat Lebih Banyak
            <FontAwesomeIcon icon={faChevronRight} className="ml-2 text-slate-800 hover:text-slate-600"/>
          </button>
        </div>
      )}
    </div>
  )
}

export default Trade;