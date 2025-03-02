import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { AppContainer } from './App.style';
import { GlobalStyle } from '../styles/global.style';

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}
