import { useInfiniteQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { omdbApi } from '../api';

export const useMovieSearch = searchTerm => {
  return useInfiniteQuery({
    queryKey: ['omdb', 'movies', searchTerm],
    queryFn: ({ pageParam = 1 }) => omdbApi.searchMovies(searchTerm, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || !lastPage.movies.length) return undefined;
      return allPages.length + 1;
    },
    enabled: !!searchTerm,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  });
};

export const useMovieDetails = imdbId => {
  return useQuery({
    queryKey: ['omdb', 'movie', imdbId],
    queryFn: () => omdbApi.getMovieDetails(imdbId),
    enabled: !!imdbId,
    staleTime: 30 * 60 * 1000, // Consider data fresh for 30 minutes
  });
};
