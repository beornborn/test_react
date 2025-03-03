import React from 'react';
import {
  Card,
  Poster,
  Content,
  Title,
  Year,
  RemoveButton,
} from '@/components/FavoriteCard/FavoriteCard.style';
import { useFavoritesStore } from '@/store/favorites';

export function FavoriteCard({ movie }) {
  const { removeFavorite } = useFavoritesStore();

  return (
    <Card>
      <Poster
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/120x180?text=No+Poster'
        }
        alt={`${movie.Title} poster`}
      />
      <Content>
        <Title>{movie.Title}</Title>
        <Year>{movie.Year}</Year>
      </Content>
      <RemoveButton
        onClick={() => removeFavorite(movie.imdbID)}
        aria-label="Remove from favorites"
      >
        ×
      </RemoveButton>
    </Card>
  );
}
