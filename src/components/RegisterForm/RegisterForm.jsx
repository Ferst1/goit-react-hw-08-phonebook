import { Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="name"
          name="name"
          value={name}
          required
          placeholder="Enter your name"
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          required
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          required
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <Button colorScheme="blue" size="md" type="submit" mt="12px">
        Sign Up
      </Button>
    </form>
  );
};

export default RegisterForm;
