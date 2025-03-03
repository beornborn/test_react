import React from 'react';
import { useInView } from 'react-intersection-observer';
import { MovieCard } from '../MovieCard/MovieCard';
import {
  MoviesContainer,
  MoviesGrid,
  Message,
  LoadingMore,
} from './Movies.style';
import { useMovieSearch } from '../../hooks/useMovies';
import { useSearchStore } from '../../store/search';

export function Movies() {
  const { ref, inView } = useInView();
  const debouncedSearch = useSearchStore(state => state.debouncedSearch);

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useMovieSearch(debouncedSearch);

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <Message>Loading...</Message>;
  }

  if (error) {
    return <Message>Error: {error.message}</Message>;
  }

  if (!debouncedSearch) {
    return <Message>Start typing to search for movies</Message>;
  }

  if (!data?.pages[0]?.movies?.length) {
    return <Message>No movies found</Message>;
  }

  return (
    <MoviesContainer>
      <MoviesGrid>
        {data.pages.map(page =>
          page.movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        )}
      </MoviesGrid>
      {hasNextPage && (
        <LoadingMore ref={ref}>
          {isFetchingNextPage ? 'Loading more...' : 'Load more'}
        </LoadingMore>
      )}
    </MoviesContainer>
  );
}
