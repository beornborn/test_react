import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const FavoritesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;

  > * {
    flex: 1;
    min-width: 300px;
    max-width: 400px;
  }
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  padding: 2rem;
`;
