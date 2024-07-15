
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { filterReducer } from './filterSlice';
import { authApi } from '../services/authApi';
import { contactsApi } from '../services/contactsApi';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(authApi.middleware, contactsApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
