import React from 'react';
import { render } from '@testing-library/react';
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

const AllTheProviders = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// override render method
export { customRender as render };

export const mockMovies = [
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
