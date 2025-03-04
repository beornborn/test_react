import React from 'react';
import { render, mockMovies } from '@/tests/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { Search } from './Search';
import { useSearchStore } from '@/store/search';
import { useMovieSearch } from '@/hooks/useMovies';
import { useFavoritesStore } from '@/store/favorites';

jest.mock('@/store/search', () => ({
  useSearchStore: jest.fn(),
}));

jest.mock('@/hooks/useMovies', () => ({
  useMovieSearch: jest.fn(),
}));

jest.mock('@/store/favorites', () => ({
  useFavoritesStore: jest.fn(),
}));

describe('Search Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useSearchStore.mockImplementation(selector => {
      const state = {
        searchTerm: 'test',
        debouncedSearch: 'test',
        setSearchTerm: jest.fn(),
        setDebouncedSearch: jest.fn(),
        clearSearch: jest.fn(),
      };

      if (!selector) {
        return state;
      }

      if (typeof selector === 'function') {
        return selector(state);
      }

      return state[selector];
    });

    useMovieSearch.mockReturnValue({
      data: {
        pages: [
          {
            movies: mockMovies,
          },
        ],
      },
      isLoading: false,
      error: null,
      hasNextPage: false,
      isFetchingNextPage: false,
      fetchNextPage: jest.fn(),
    });

    useFavoritesStore.mockImplementation(selector => {
      const state = {
        favorites: [],
        isFavorite: jest.fn().mockReturnValue(false),
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
      };

      if (!selector) {
        return state;
      }

      if (typeof selector === 'function') {
        return selector(state);
      }

      return state[selector];
    });
  });

  it('renders movies successfully', () => {
    render(<Search />);

    mockMovies.forEach(movie => {
      expect(screen.getByText(movie.Title)).toBeInTheDocument();
      expect(screen.getByText(movie.Year)).toBeInTheDocument();
    });

    const searchInput = screen.getByLabelText('Search movies');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveValue('test');
  });

  it('adds movie to favorites when clicking the favorite button', () => {
    const mockAddFavorite = jest.fn();
    useFavoritesStore.mockImplementation(selector => {
      const state = {
        favorites: [],
        isFavorite: jest.fn().mockReturnValue(false),
        addFavorite: mockAddFavorite,
        removeFavorite: jest.fn(),
      };

      if (!selector) {
        return state;
      }

      if (typeof selector === 'function') {
        return selector(state);
      }

      return state[selector];
    });

    render(<Search />);

    const favoriteButton = screen.getAllByLabelText(/Add .* to favorites/)[0];
    fireEvent.click(favoriteButton);

    expect(mockAddFavorite).toHaveBeenCalledWith(mockMovies[0]);
  });
});
