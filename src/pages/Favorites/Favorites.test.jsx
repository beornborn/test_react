import React from 'react';
import { render, mockMovies } from '@/tests/test-utils';
import { screen, fireEvent } from '@testing-library/react';
import { Favorites } from './Favorites';
import { useFavoritesStore } from '@/store/favorites';

jest.mock('@/store/favorites', () => ({
  useFavoritesStore: jest.fn(),
}));

describe('Favorites Page', () => {
  let removeFavoriteMock;

  beforeEach(() => {
    jest.clearAllMocks();
    removeFavoriteMock = jest.fn();

    useFavoritesStore.mockImplementation(selector => {
      const state = {
        favorites: mockMovies,
        removeFavorite: removeFavoriteMock,
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

  it('removes a favorite movie when remove button is clicked', () => {
    render(<Favorites />);

    const firstMovie = mockMovies[0];
    const removeButton = screen.getAllByLabelText('Remove from favorites')[0];
    fireEvent.click(removeButton);

    expect(removeFavoriteMock).toHaveBeenCalledTimes(1);
    expect(removeFavoriteMock).toHaveBeenCalledWith(firstMovie.imdbID);
  });
});
