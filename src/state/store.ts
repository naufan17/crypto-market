import { configureStore } from '@reduxjs/toolkit';
import allCryptoReducer from './allCrypto/allCryptoSlice';
import detailCryptoReducer from './detailCrypto/detailCryptoSlice';
import tradeCryptoReducer from './tradeCrypto/tradeCryptoSlice';

export const store = configureStore({
  reducer: {
    allCrypto: allCryptoReducer,
    detailCrypto: detailCryptoReducer,
    tradeCrypto: tradeCryptoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;