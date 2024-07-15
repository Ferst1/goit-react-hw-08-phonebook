import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterMutation } from 'services/authApi';
import { setAuthToken } from 'redux/auth/slice';
import { Button } from '@chakra-ui/react';
import Notiflix from 'notiflix';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await register({ name, email, password }).unwrap();
      dispatch(setAuthToken(userData.token));
      localStorage.setItem('token', userData.token);
      Notiflix.Notify.success('Registration success!');
    } catch (error) {
      Notiflix.Notify.failure(error?.data?.error || 'Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
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
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
