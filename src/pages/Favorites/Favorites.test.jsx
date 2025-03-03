import React from 'react';
import { render, mockMovies } from '@/tests/test-utils';
import { screen } from '@testing-library/react';
import { Favorites } from './Favorites';
import { useFavoritesStore } from '@/store/favorites';

// Mock the Zustand store
jest.mock('@/store/favorites', () => ({
  useFavoritesStore: jest.fn(),
}));

describe('Favorites Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    useFavoritesStore.mockImplementation(selector => {
      const state = {
        favorites: mockMovies,
        removeFavorite: jest.fn(),
        addFavorite: jest.fn(),
        isFavorite: jest.fn(),
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

  it('renders favorite movies successfully', () => {
    render(<Favorites />);

    expect(screen.getByText('My Favorite Movies')).toBeInTheDocument();
    mockMovies.forEach(movie => {
      expect(screen.getByText(movie.Title)).toBeInTheDocument();
      expect(screen.getByText(movie.Year)).toBeInTheDocument();
    });
  });
});
