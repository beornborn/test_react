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
    <PageContainer>
      <header>
        <Title id="favorites-title">My Favorite Movies</Title>
      </header>
      <MainContent>
        {favorites.length === 0 ? (
          <EmptyMessage role="status" aria-live="polite" aria-atomic="true">
            You haven't added any movies to your favorites yet. Search for
            movies to add them to your favorites.
          </EmptyMessage>
        ) : (
          <FavoritesGrid role="list" aria-labelledby="favorites-title">
            {favorites.map(movie => (
              <div key={movie.imdbID} role="listitem">
                <FavoriteCard
                  movie={movie}
                  aria-label={`${movie.Title} (${movie.Year})`}
                />
              </div>
            ))}
          </FavoritesGrid>
        )}
      </MainContent>
    </PageContainer>
  );
}
