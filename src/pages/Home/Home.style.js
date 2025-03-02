import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.25rem;
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
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 31.25rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
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

export const MoviesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FavoritesSection = styled.aside`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 18.75rem;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    order: -1; // Makes favorites appear first on mobile
  }
`;

export const Message = styled.p`
  color: #718096;
  text-align: center;
  padding: 2rem;
`;
