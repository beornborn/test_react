import { useQuery } from '@tanstack/react-query';
import { omdbApi } from '../api';

export const useMovieSearch = (searchTerm, page = 1) => {
  return useQuery({
    queryKey: ['omdb', 'movies', searchTerm, page],
    queryFn: () => omdbApi.searchMovies(searchTerm, page),
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
