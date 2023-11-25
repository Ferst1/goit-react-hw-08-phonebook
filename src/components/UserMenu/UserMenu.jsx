import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button
        colorScheme="blue"
        size="sm"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        LOG OUT
      </Button>
    </div>
  );
};
