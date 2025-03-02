import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 12px 20px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MoviesSection = styled.section`
  /* Styles for the movies grid will go here */
`;

export const FavoritesSection = styled.aside`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  height: fit-content;

  @media (max-width: 768px) {
    grid-row: 1;
  }
`;
