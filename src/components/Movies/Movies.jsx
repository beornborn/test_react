import React from 'react';
import { MovieCard } from '../MovieCard';
import { MoviesContainer, MoviesGrid, Message } from './Movies.style';
import { useMovieSearch } from '../../hooks/useMovies';

export function Movies({ searchTerm }) {
  const { data, isLoading, error } = useMovieSearch(searchTerm);

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>Error: {error.message}</Message>;
  }

  if (!searchTerm) {
    return <Message>Start typing to search for movies</Message>;
  }

  if (!data?.movies?.length) {
    return <Message>No movies found</Message>;
  }

  return (
    <MoviesContainer>
      <MoviesGrid>
        {data.movies.map(movie => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </MoviesGrid>
    </MoviesContainer>
  );
}
