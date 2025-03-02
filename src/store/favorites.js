import { create } from 'zustand';
import { storageService } from '../services/storage';

export const useFavoritesStore = create((set, get) => ({
  favorites: storageService.getFavorites(),

  addFavorite: movie => {
    const favorites = [...get().favorites, movie];
    set({ favorites });
    storageService.setFavorites(favorites);
  },

  removeFavorite: movieId => {
    const favorites = get().favorites.filter(movie => movie.imdbID !== movieId);
    set({ favorites });
    storageService.setFavorites(favorites);
  },

  isFavorite: movieId => {
    return get().favorites.some(movie => movie.imdbID === movieId);
  },
}));
