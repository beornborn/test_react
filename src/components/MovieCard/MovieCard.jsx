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

  const titleId = `movie-title-${movie.imdbID}`;
  const yearId = `movie-year-${movie.imdbID}`;

  return (
    <Card
      role="listitem"
      aria-labelledby={`${titleId} ${yearId}`}
      isFavorite={favorite}
    >
      <Poster
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://placehold.co/120x180?text=No Poster'
        }
        alt={`${movie.Title} poster`}
        loading="lazy"
      />
      <Content>
        <Title id={titleId}>{movie.Title}</Title>
        <Year id={yearId}>{movie.Year}</Year>
      </Content>
      <LikeButton
        onClick={handleFavoriteClick}
        isFavorite={favorite}
        aria-label={
          favorite
            ? `Remove ${movie.Title} from favorites`
            : `Add ${movie.Title} to favorites`
        }
        aria-pressed={favorite}
      >
        <span aria-hidden="true">♥</span>
      </LikeButton>
    </Card>
  );
}
