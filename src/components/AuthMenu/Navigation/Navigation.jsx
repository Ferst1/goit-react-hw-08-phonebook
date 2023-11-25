import AuthMenu from 'components/AuthMenu/AuthMenu';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, HeaderNavLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Loader } from 'components/Loader/Loader';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <header>
        <nav>
          <div>
            <HeaderNavLink to="/">Home</HeaderNavLink>
            {isLoggedIn && (
              <HeaderNavLink to="/contacts">Contacts</HeaderNavLink>
            )}
          </div>
          <div>{!isLoggedIn ? <AuthMenu /> : <UserMenu />}</div>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Header>
  );
};

export default Navigation;
