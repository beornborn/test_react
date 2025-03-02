import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AppContainer } from './App.style';
import { GlobalStyle } from '../styles/global.style';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <AppContainer>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
