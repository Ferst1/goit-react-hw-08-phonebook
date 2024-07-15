

import React, { useState } from 'react';
import { Form } from './ContactForm.styled';
import { useAddContactMutation, useFetchContactsQuery } from '../../services/contactsApi';
import { Button } from '@chakra-ui/react';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts, refetch } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchResult = Array.isArray(contacts)
      ? contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      : null;

    if (searchResult) {
      Notiflix.Notify.failure(`${name} is already in contacts`);
      return false;
    }

    try {
      await addContact({ name, number }).unwrap();
      Notiflix.Notify.success('Contact added successfully');
      setName('');
      setNumber('');
      refetch(); // Обновление списка контактов
    } catch (error) {
      Notiflix.Notify.failure('Failed to add contact. Please try again.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="inputName">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        id="inputName"
        required
        onChange={e => setName(e.target.value)}
      />
      <label htmlFor="inputNumber">Number</label>
      <input
        type="tel"
        name="number"
        value={number}
        id="inputNumber"
        required
        onChange={e => setNumber(e.target.value)}
      />
      <Button colorScheme="blue" size="sm" type="submit" isLoading={isLoading}>
        Add contact
      </Button>
    </Form>
  );
};
