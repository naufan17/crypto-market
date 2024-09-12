import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrade } from "../../api/trade";
import { setTrade, setLoading } from "./tradeCryptoSlice";

export const fetchTrades = createAsyncThunk('/tradeCrypto/fetchTrades', async ({ id }: { id?: string }, { dispatch }) => {
  try {
    const result = await getTrade(id);
    dispatch(setTrade(result));
    dispatch(setLoading(false));
  } catch (err) {
    console.error(err);
  }
});
