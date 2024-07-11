import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log('Registering with credentials:', credentials); // Проверка данных перед отправкой
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      Notiflix.Notify.success('Registration success! :)');
      return response.data;
    } catch (error) {
      console.error(
        'Registration error:',
        error.response?.data || error.message
      ); // Логирование ошибки
      Notiflix.Notify.failure('Registration failed. Please try again.');
      const errorMessage = error.response?.data?.message || error.message;

      // Специфичная обработка ошибки дублирующегося email
      if (error.response?.data?.code === 11000) {
        return thunkAPI.rejectWithValue('Email already in use');
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      Notiflix.Notify.success('Login success! :)');
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure('Login failed. Please try again.');
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    Notiflix.Notify.success('LogOut success! :)');
    clearAuthHeader();
  } catch (error) {
    Notiflix.Notify.failure('Logout failed. Please try again.');
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || error.message
    );
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch contact');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      Notiflix.Notify.failure('Failed to refresh user. Please try again.');
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (endpoint, thunkAPI) => {
    try {
      const response = await axios.get(endpoint);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
