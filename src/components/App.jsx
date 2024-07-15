
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRefreshUserQuery } from 'services/authApi';
import { setAuthToken, clearAuthToken } from 'redux/auth/slice';
import { useAuth } from 'hooks/useAuth';
import Navigation from './Navigation/Navigation';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Loader } from './Loader/Loader';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { token, isRefreshing } = useAuth();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage) {
      dispatch(setAuthToken(tokenFromStorage));
    }
  }, [dispatch]);

  const { data, isFetching } = useRefreshUserQuery(null, {
    skip: !token,
  });

  useEffect(() => {
    if (data) {
      dispatch(setAuthToken(data.token));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (!token) {
      dispatch(clearAuthToken());
    }
  }, [token, dispatch]);

  if (isFetching || isRefreshing) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" element={<Contacts />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
