import React from 'react';
import { FavoriteCard } from '../FavoriteCard/FavoriteCard';
import {
  FavoritesContainer,
  FavoritesTitle,
  FavoritesList,
  EmptyMessage,
} from './Favorites.style';
import { useFavoritesStore } from '../../store/favorites';

export function Favorites() {
  const favorites = useFavoritesStore(state => state.favorites);

  return (
    <FavoritesContainer>
      <FavoritesTitle>My Favorites</FavoritesTitle>
      {favorites.length > 0 ? (
        <FavoritesList>
          {favorites.map(movie => (
            <FavoriteCard key={movie.imdbID} movie={movie} />
          ))}
        </FavoritesList>
      ) : (
        <EmptyMessage>No favorite movies yet</EmptyMessage>
      )}
    </FavoritesContainer>
  );
}
