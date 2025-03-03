import React from 'react';
import { render } from '@/tests/test-utils';
import { screen } from '@testing-library/react';
import { Favorites } from './Favorites';
import { useFavoritesStore } from '@/store/favorites';

// Mock the Zustand store
jest.mock('@/store/favorites', () => ({
  useFavoritesStore: jest.fn(),
}));

describe('Favorites Page', () => {
  const mockMovies = [
    {
      imdbID: '1',
      Title: 'Test Movie 1',
      Year: '2021',
      Poster: 'https://example.com/poster1.jpg',
    },
    {
      imdbID: '2',
      Title: 'Test Movie 2',
      Year: '2022',
      Poster: 'https://example.com/poster2.jpg',
    },
  ];

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Mock the store state
    useFavoritesStore.mockImplementation(selector => {
      const state = {
        favorites: mockMovies,
        removeFavorite: jest.fn(),
        addFavorite: jest.fn(),
        isFavorite: jest.fn(),
      };

      // If no selector is provided, return the entire state
      if (!selector) {
        return state;
      }

      // If selector is a function, call it with the state
      if (typeof selector === 'function') {
        return selector(state);
      }

      // If selector is a string, return the specific property
      return state[selector];
    });
  });

  it('renders favorite movies successfully', () => {
    render(<Favorites />);

    // Check if the page title is rendered
    expect(screen.getByText('My Favorite Movies')).toBeInTheDocument();

    // Check if all favorite movies are rendered
    mockMovies.forEach(movie => {
      expect(screen.getByText(movie.Title)).toBeInTheDocument();
      expect(screen.getByText(movie.Year)).toBeInTheDocument();
    });
  });
});
