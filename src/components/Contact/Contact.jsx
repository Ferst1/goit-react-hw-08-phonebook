import PropTypes from 'prop-types';
import { Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Button } from '@chakra-ui/react';

export function Contact({ contact }) {
  const dispatch = useDispatch();
  const { id, name, number } = contact;
  const handleDeleteContact = () => dispatch(deleteContact(id));

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
      >
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
