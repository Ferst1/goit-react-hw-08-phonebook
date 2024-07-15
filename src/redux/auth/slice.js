

import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken(state, action) {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    clearAuthToken(state) {
      state.token = null;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logIn.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addMatcher(authApi.endpoints.logOut.matchFulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addMatcher(authApi.endpoints.refreshUser.matchFulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
      });
  },
});

export const { setAuthToken, clearAuthToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
