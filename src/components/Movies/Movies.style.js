import styled from 'styled-components';

export const MoviesContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MoviesGrid = styled.div`
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

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  padding: 2rem;
`;

export const LoadingMore = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
