import { configureStore } from '@reduxjs/toolkit';
import { api } from './apiSlice';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
