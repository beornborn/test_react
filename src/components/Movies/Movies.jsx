import React, { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { MovieCard } from '@/components/MovieCard/MovieCard';
import {
  MoviesContainer,
  MoviesList,
  MovieListItem,
  Message,
  LoadingMore,
} from './Movies.style';
import { useMovieSearch } from '@/hooks/useMovies';
import { useSearchStore } from '@/store/search';

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

  const handleLoadMore = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, fetchNextPage]);

  React.useEffect(() => {
    if (inView && hasNextPage) {
      handleLoadMore();
    }
  }, [inView, hasNextPage, handleLoadMore]);

  if (isLoading) {
    return (
      <Message role="status" aria-live="polite">
        Loading...
      </Message>
    );
  }

  if (error) {
    return <Message role="alert">Error: {error.message}</Message>;
  }

  if (!debouncedSearch) {
    return <Message role="status">Start typing to search for movies</Message>;
  }

  if (!data?.pages[0]?.movies?.length) {
    return (
      <Message role="status" aria-live="polite">
        No movies found
      </Message>
    );
  }

  return (
    <MoviesContainer role="region" aria-label="Search Results">
      <MoviesList role="list" aria-label="List of movies">
        {data.pages.map(page =>
          page.movies.map(movie => (
            <MovieListItem key={movie.imdbID} role="listitem">
              <MovieCard movie={movie} />
            </MovieListItem>
          ))
        )}
      </MoviesList>
      {hasNextPage && (
        <LoadingMore
          ref={ref}
          onClick={() => fetchNextPage()}
          aria-label={
            isFetchingNextPage ? 'Loading more movies' : 'Load more movies'
          }
        >
          {isFetchingNextPage ? 'Loading more...' : 'Load more'}
        </LoadingMore>
      )}
    </MoviesContainer>
  );
}
