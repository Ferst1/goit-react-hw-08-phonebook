import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from '../../components/Contact/Contact';
import { Item } from 'components/Contact/Contact.styled';
import { useFetchContactsQuery } from 'services/contactsApi';
import { selectFilter } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export function ContactList() {
  const filter = useSelector(selectFilter);
  const { data: contacts, error, isLoading, refetch } = useFetchContactsQuery();

  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = contacts ? getVisibleContacts(contacts, filter) : [];

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading contacts: {error.message}</p>;

  return (
    <ul>
      {visibleContacts.length === 0 && <Item>No contacts for your search</Item>}
      {visibleContacts.length > 0 &&
        visibleContacts.map(item => (
          <Contact key={item._id} contact={item} refetchContacts={refetch} />
        ))}
    </ul>
  );
}
