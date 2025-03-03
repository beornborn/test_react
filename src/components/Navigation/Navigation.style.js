import styled from 'styled-components';

export const NavContainer = styled.nav`
  margin-bottom: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  list-style: none;
`;

export const NavItem = styled.li`
  a {
    position: relative;
    display: inline-block;
    padding: 0.75rem 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    text-decoration: none;

    &:hover,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }

    &.active::after {
      position: absolute;
      content: '';
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
