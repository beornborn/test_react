import React from 'react';
import {
  PageContainer,
  Title,
  MainContent,
  FavoritesGrid,
  EmptyMessage,
} from './Favorites.style';
import { FavoriteCard } from '../../components/FavoriteCard/FavoriteCard';
import { useFavoritesStore } from '../../store/favorites';

export function Favorites() {
  const favorites = useFavoritesStore(state => state.favorites);

  return (
    <PageContainer role="main" aria-label="Favorite Movies">
      <Title id="favorites-title">My Favorite Movies</Title>
      <MainContent>
        {favorites.length === 0 ? (
          <EmptyMessage role="status" aria-live="polite">
            No favorite movies yet
          </EmptyMessage>
        ) : (
          <FavoritesGrid
            role="grid"
            aria-labelledby="favorites-title"
            aria-label={`${favorites.length} favorite movies`}
          >
            {favorites.map(movie => (
              <FavoriteCard key={movie.imdbID} movie={movie} role="gridcell" />
            ))}
          </FavoritesGrid>
        )}
      </MainContent>
    </PageContainer>
  );
}
