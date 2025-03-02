const FAVORITES_KEY = 'movie-favorites';

export const storageService = {
  getFavorites: () => {
    try {
      const favorites = localStorage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error reading favorites from localStorage:', error);
      return [];
    }
  },

  setFavorites: favorites => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites to localStorage:', error);
    }
  },
};
