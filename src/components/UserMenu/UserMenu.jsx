
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'services/authApi';
import { clearAuthToken } from 'redux/auth/slice';
import { Button } from '@chakra-ui/react';
import Notiflix from 'notiflix';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  const [logOutApi] = useLogOutMutation();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await logOutApi().unwrap();
      dispatch(clearAuthToken());
      localStorage.removeItem('token');
      Notiflix.Notify.success('Logout success!');
    } catch (error) {
      Notiflix.Notify.failure('Logout failed. Please try again.');
    }
  };

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button
        colorScheme="blue"
        size="sm"
        type="button"
        onClick={handleLogOut}
      >
        LOG OUT
      </Button>
    </div>
  );
};
