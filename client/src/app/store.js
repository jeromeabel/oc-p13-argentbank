import { configureStore } from '@reduxjs/toolkit';

// RTK Slices
import { api } from './apiSlice';
import authReducer from '../features/authSlice';
import userReducer from '../features/userSlice';

/**
 * The store setup with Redux Toolkit
 * It contains the reducers from the API, authentication slice and user slice
 */
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
