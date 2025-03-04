import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '@/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const AllTheProviders = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </QueryClientProvider>
);

export function renderWithProviders(ui, options = {}) {
  return rtlRender(ui, { wrapper: AllTheProviders, ...options });
}

export const render = renderWithProviders;

export const mockMovies = [
  {
    imdbID: 'tt1234567',
    Title: 'Test Movie 1',
    Year: '2021',
    Poster: 'https://example.com/poster1.jpg',
  },
  {
    imdbID: 'tt7654321',
    Title: 'Test Movie 2',
    Year: '2022',
    Poster: 'https://example.com/poster2.jpg',
  },
];
