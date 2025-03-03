import React from 'react';
import { NavLink } from 'react-router-dom';
import { useFavoritesStore } from '../../store/favorites';
import { NavContainer, NavList, NavItem } from './Navigation.style';

export function Navigation() {
  const favorites = useFavoritesStore(state => state.favorites);

  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/" end>
            Explore
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/favorites">My Favs ({favorites.length})</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}
