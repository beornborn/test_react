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

  if (favorites.length === 0) {
    return (
      <PageContainer>
        <Title>My Favorite Movies</Title>
        <MainContent>
          <EmptyMessage>No favorite movies yet</EmptyMessage>
        </MainContent>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Title>My Favorite Movies</Title>
      <MainContent>
        <FavoritesGrid>
          {favorites.map(movie => (
            <FavoriteCard key={movie.imdbID} movie={movie} />
          ))}
        </FavoritesGrid>
      </MainContent>
    </PageContainer>
  );
}
