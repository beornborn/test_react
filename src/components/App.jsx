import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from '../pages/Home';
import { Navigation } from './Navigation/Navigation';
import { AppContainer } from './App.style';
import { GlobalStyle } from '../styles/global.style';
import { theme } from '../styles/theme';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <AppContainer>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Home showOnlyFavorites />} />
            </Routes>
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
