import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pair } from '../../types/Pairs';
import { Ticker, Price } from '../../types/Summaries';

interface AllCryptoState {
  ticker: Ticker;
  price: Price;
  pair: Pair[];
  loading: boolean;
}

const initialState: AllCryptoState = {
  ticker: {},
  price: {},
  pair: [],
  loading: true,
}

const allCryptoSice = createSlice({
  name: 'allCrypto',
  initialState,
  reducers: {
    setTicker(state, action: PayloadAction<Ticker>) {
      state.ticker = action.payload;
    },
    setPrice(state, action: PayloadAction<Price>) {
      state.price = action.payload;
    },
    setPair(state, action: PayloadAction<Pair[]>) {
      state.pair = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
})

export const {
  setTicker,
  setPrice,
  setPair,
  setLoading,
} = allCryptoSice.actions;

export default allCryptoSice.reducer;