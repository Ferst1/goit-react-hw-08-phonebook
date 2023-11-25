import { HeaderNavLink } from './AuthMene.styled';
import { Button } from '@chakra-ui/react';

const AuthMenu = () => {
  return (
    <>
      <HeaderNavLink to="/register">
        <Button colorScheme="blue" size="sm">
          SIGN UP
        </Button>
      </HeaderNavLink>
      <HeaderNavLink to="/login">
        <Button colorScheme="blue" size="sm">
          LOG IN
        </Button>
      </HeaderNavLink>
    </>
  );
};

export default AuthMenu;
