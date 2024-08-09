import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { getTrade } from "../../../api/trade";
import { TradeData } from "../../../interfaces/Trade";
import Loading from '../../../components/common/Loading';

interface TradeProps {
  id?: string;
}

const Trade: React.FC<TradeProps> = ({ id }) => {
  const [trade, setTrade] = useState<TradeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTrades = async () => {
    try {
      const result = await getTrade(id);
      setTrade(result);
    } catch (err) {
      console.log('Error fetching trade', err);    
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrades();

    const interval = setInterval(getTrades, 2000);
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Loading />;
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
        <thead>
          <tr>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center bg-slate-200 font-medium font-sans text-sm sm:text-base text-gray-800 tracking-wider">
              Waktu
            </th>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center bg-slate-200 font-medium font-sans text-sm sm:text-base text-gray-800 tracking-wider">
              Harga
            </th>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center bg-slate-200 font-medium font-sans text-sm sm:text-base text-gray-800 tracking-wider">
              Jumlah
            </th>
            <th className="px-4 sm:px-6 py-3 sm:py-4 text-center bg-slate-200 font-medium font-sans text-sm sm:text-base text-gray-800 tracking-wider">
              Jenis
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {trade.slice(0, 10).map((item, index) => (
            <tr key={index}>
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
    </div>
  )
}

export default Trade;