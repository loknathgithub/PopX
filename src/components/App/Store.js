import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/User/userSlice.js';

export const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });
