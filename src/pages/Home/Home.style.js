import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  flex: 1;
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
  display: flex;
  gap: 2rem;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MoviesSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FavoritesSection = styled.aside`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    order: -1; // Makes favorites appear first on mobile
  }
`;
