import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
  selectFilter,
  selectVisibleContacts,
} from 'redux/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);
  return { contacts, error, isLoading, filter, visibleContacts };
};
