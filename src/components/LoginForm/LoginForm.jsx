
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLogInMutation } from 'services/authApi';
import { setAuthToken } from 'redux/auth/slice';
import { Button } from '@chakra-ui/react';
import Notiflix from 'notiflix';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logIn] = useLogInMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await logIn({ email, password }).unwrap();
      dispatch(setAuthToken(userData.token));
      localStorage.setItem('token', userData.token);
      Notiflix.Notify.success('Login success!');
    } catch (error) {
      Notiflix.Notify.failure(error?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
