import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useFetchContactsQuery } from 'services/contactsApi';
import { ContactDiv } from './Contacts.styled';

const Contacts = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  return (
    <ContactDiv>
      <h1>Phonebook</h1>
      <p>Add contact name & phone:</p>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {error && <b>Error: {error.message}</b>}
      {isLoading && <Loader />}
      {contacts && <ContactList />}
    </ContactDiv>
  );
};

export default Contacts;
