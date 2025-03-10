import { useInfiniteQuery } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import * as omdbApi from '@/api/omdb/movies';

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
