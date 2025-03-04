import { create } from 'zustand';
import debounce from 'lodash/debounce';

const DEBOUNCE_DELAY = 500;

export const useSearchStore = create(set => ({
  searchTerm: '',
  debouncedSearch: '',

  setSearchTerm: term => {
    set({ searchTerm: term });
    useSearchStore.getState().setDebouncedSearch(term);
  },

  setDebouncedSearch: debounce(term => {
    set({ debouncedSearch: term });
  }, DEBOUNCE_DELAY),

  clearSearch: () => {
    set({ searchTerm: '', debouncedSearch: '' });
  },
}));
