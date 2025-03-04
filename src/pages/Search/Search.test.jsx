import React from 'react';
import { render, mockMovies } from '@/tests/test-utils';
import { screen } from '@testing-library/react';
import { Search } from './Search';
import { useSearchStore } from '@/store/search';
import { useMovieSearch } from '@/hooks/useMovies';

jest.mock('@/store/search', () => ({
  useSearchStore: jest.fn(),
}));

jest.mock('@/hooks/useMovies', () => ({
  useMovieSearch: jest.fn(),
}));

describe('Search Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    // Mock the search store
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
});
