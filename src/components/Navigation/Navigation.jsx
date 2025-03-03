import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFavoritesStore } from '../../store/favorites';
import { NavContainer, NavList, NavItem } from './Navigation.style';

export function Navigation() {
  const favorites = useFavoritesStore(state => state.favorites);

  return (
    <NavContainer role="navigation" aria-label="Main Navigation">
      <NavList role="menubar">
        <NavItem role="none">
          <NavLink
            to="/"
            end
            role="menuitem"
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Explore
          </NavLink>
        </NavItem>
        <NavItem role="none">
          <NavLink
            to="/favorites"
            role="menuitem"
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            My Favs ({favorites.length})<span className="sr-only"> movies</span>
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}
