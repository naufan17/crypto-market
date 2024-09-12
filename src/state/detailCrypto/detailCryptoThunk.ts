import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pair } from '../../types/Pairs';
import { getPair } from '../../api/pairs';
import { getSummary } from '../../api/summaries';
import { getTicker } from '../../api/tickers';
import {   
  setTicker,
  setPrice,
  setPair,
  setLoading,
} from "./detailCryptoSlice";

export const fetchAllData = createAsyncThunk('/detailCrypto/fetchAllData', async ({ id }: { id?: string }, { dispatch }) => {
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
    dispatch(setPrice(priceResult.prices_24h));
    dispatch(setTicker(tickerResult.ticker));
    dispatch(setPair(pairResult.filter((pair: Pair) => pair.id === id)));
    dispatch(setLoading(false));
  } catch (err) {
    console.error(err);    
  }
});