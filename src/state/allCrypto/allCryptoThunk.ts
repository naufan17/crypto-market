import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSummary } from '../../api/summaries';
import { getPair } from '../../api/pairs';
import { Pair } from '../../types/Pairs';
import { 
  setTicker, 
  setPrice, 
  setPair, 
  setLoading 
} from "./allCryptoSlice";

export const fetchSummary = createAsyncThunk('/allCrypto/fetchSummaries', async (_, { dispatch }) => {
  try {
    const result = await getSummary();
    dispatch(setTicker(result.tickers));
    dispatch(setPrice(result.prices_24h));        
  } catch (err) {
    console.error(err);
  }
})

export const fetchPair = createAsyncThunk('/allCrypto/fetchPair', async (_, { dispatch }) => {
  try {
    const result = await getPair();
    dispatch(setPair(result.filter((pair: Pair) => pair.base_currency === 'idr')));        
    dispatch(setLoading(false))    
  } catch (err) {
    console.error(err);
  }
})