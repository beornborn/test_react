import { create } from 'zustand';

export const useSearchStore = create(set => ({
  searchTerm: '',
  debouncedSearch: '',
  setSearchTerm: term => set({ searchTerm: term }),
  setDebouncedSearch: term => set({ debouncedSearch: term }),
  clearSearch: () => set({ searchTerm: '', debouncedSearch: '' }),
}));
