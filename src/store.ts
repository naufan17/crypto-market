import { configureStore } from '@reduxjs/toolkit';
import allCryptoReducer from './features/allCrypto/allCryptoSlice';
import detailCryptoReducer from './features/detailCrypto/detailCryptoSlice';
import tradeCryptoReducer from './features/tradeCrypto/tradeCryptoSlice';

export const store = configureStore({
  reducer: {
    allCrypto: allCryptoReducer,
    detailCrypto: detailCryptoReducer,
    tradeCrypto: tradeCryptoReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;