import { configureStore } from '@reduxjs/toolkit';
import transReducer from '../features/transactions/transactionsSlice';

export const store = configureStore({
  reducer: {
    trans: transReducer,
  },
});
