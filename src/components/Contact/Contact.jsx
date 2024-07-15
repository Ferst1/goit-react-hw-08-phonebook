import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDeleteContactMutation } from '../../services/contactsApi';
import { Button } from '@chakra-ui/react';
import Notiflix from 'notiflix';

export function Contact({ contact, refetchContacts }) {
  const { _id, name, number } = contact;
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDeleteContact = async () => {
    try {
      await deleteContact(_id).unwrap();
      Notiflix.Notify.success('Contact deleted');
      refetchContacts(); // Обновление данных после удаления
    } catch (error) {
      Notiflix.Notify.failure('Failed to delete contact');
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <Item>
      <p>
        {name} : {number}
      </p>
      <Button
        colorScheme="blue"
        size="xs"
        type="button"
        onClick={handleDeleteContact}
        isLoading={isLoading}
      >
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  refetchContacts: PropTypes.func.isRequired, // Добавление пропса refetchContacts
};
