import React from 'react';
import { HomeImg } from './Home.styled';
import { H1 } from 'pages/Register/Register.styled';

const Home = () => {
  return (
    <HomeImg>
      <H1>Welcome to Phonebook App</H1>
      <p>Here you can fast create account and store your contacts online!</p>
    </HomeImg>
  );
};

export default Home;
