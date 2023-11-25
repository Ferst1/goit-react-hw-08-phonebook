import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { H1 } from './Register.styled';

const Register = () => {
  return (
    <>
      <H1>Register your account in 1 minute!</H1>
      <RegisterForm />
    </>
  );
};

export default Register;
