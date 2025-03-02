import { omdbClient } from './client';
import { OMDB_CONFIG } from './config';

export const searchMovies = async (searchTerm, page = 1) => {
  if (!searchTerm) return null;

  const response = await omdbClient.get('/', {
    params: {
      apikey: OMDB_CONFIG.API_KEY,
      s: searchTerm,
      page,
      type: 'movie',
    },
  });

  if (response.data.Error) {
    throw new Error(response.data.Error);
  }

  return {
    movies: response.data.Search || [],
    totalResults: parseInt(response.data.totalResults) || 0,
  };
};

export const getMovieDetails = async imdbId => {
  if (!imdbId) return null;

  const response = await omdbClient.get('/', {
    params: {
      apikey: OMDB_CONFIG.API_KEY,
      i: imdbId,
      plot: 'full',
    },
  });

  if (response.data.Error) {
    throw new Error(response.data.Error);
  }

  return response.data;
};
