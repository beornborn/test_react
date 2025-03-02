import React from 'react';
import { Card, Poster, Content, Title, Year } from './MovieCard.style';

export function MovieCard({ movie }) {
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
    </Card>
  );
}
