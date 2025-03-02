import React from 'react';
import {
  Card,
  Poster,
  Content,
  Title,
  Year,
  FavoriteButton,
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
        <FavoriteButton
          onClick={handleFavoriteClick}
          isFavorite={favorite}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '★' : '☆'}
        </FavoriteButton>
      </Content>
    </Card>
  );
}
