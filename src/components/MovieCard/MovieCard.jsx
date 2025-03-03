import React from 'react';
import {
  Card,
  Poster,
  Content,
  Title,
  Year,
  LikeButton,
} from './MovieCard.style';
import { useFavoritesStore } from '../../store/favorites';

export function MovieCard({ movie }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesStore();
  const favorite = isFavorite(movie.imdbID);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Card isFavorite={favorite}>
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
      <LikeButton
        onClick={handleFavoriteClick}
        isFavorite={favorite}
        aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        ♥
      </LikeButton>
    </Card>
  );
}
