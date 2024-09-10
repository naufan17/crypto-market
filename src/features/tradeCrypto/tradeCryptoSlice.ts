import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TradeData } from "../../types/Trade";

interface TradeCryptoSlice {
  trade: TradeData[];
  loading: boolean;
}

const initialState: TradeCryptoSlice = {
  trade: [],
  loading: true
}

const tradeCryptoSlice = createSlice({
  name: 'tradeCrypto',
  initialState,
  reducers: {
    setTrade(state, action: PayloadAction<TradeData[]>) {
      state.trade = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
})

export const { setTrade, setLoading } = tradeCryptoSlice.actions;

export default tradeCryptoSlice.reducer;