import styled from 'styled-components';

export const NavContainer = styled.nav`
  margin-bottom: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const NavItem = styled.li`
  a {
    display: inline-block;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;
    position: relative;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
