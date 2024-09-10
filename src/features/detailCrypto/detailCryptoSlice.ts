import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pair } from '../../types/Pairs';
import { Price } from '../../types/Summaries';
import { Ticker } from '../../types/Ticker';

interface DetailCryptoState {
  ticker: Ticker | null;
  price: Price;
  pair: Pair[];
  loading: boolean;
}

const initialState: DetailCryptoState = {
  ticker: null,
  price: {},
  pair: [],
  loading: true,
}

const detailCryptoSlice = createSlice({
  name: 'detailCrypto',
  initialState,
  reducers: {
    setTicker(state, action: PayloadAction<Ticker | null>) {
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
  }
})

export const {
  setTicker,
  setPrice,
  setPair,
  setLoading,
} = detailCryptoSlice.actions;

export default detailCryptoSlice.reducer;
