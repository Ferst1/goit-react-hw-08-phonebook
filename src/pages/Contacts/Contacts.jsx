import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactDiv } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <ContactDiv>
      <h1>Phonebook</h1>
      <p>Add contact name & phone:</p>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <b>Error: {error}</b>}
      {isLoading && <Loader />}
      <ContactList />
    </ContactDiv>
  );
};

export default Contacts;
