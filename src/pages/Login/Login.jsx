import LoginForm from 'components/LoginForm/LoginForm';
import { H1 } from 'pages/Register/Register.styled';
import React from 'react';

const Login = () => {
  return (
    <>
      <H1>Log in into your account</H1>
      <LoginForm />
    </>
  );
};

export default Login;
