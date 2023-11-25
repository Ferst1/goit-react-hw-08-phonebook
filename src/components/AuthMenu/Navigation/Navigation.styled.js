import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  header {
    margin: 0 auto;
    width: 100%;
    max-width: 960px;
    height: 60px;
    background-color: #b4cbdc;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0 0 4px 4px;

    nav {
      padding: 14px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      div {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
`;

export const HeaderNavLink = styled(NavLink)`
  font-size: 22px;
  text-decoration: none;
  &:hover {
    color: #2986cc;
  }
`;
