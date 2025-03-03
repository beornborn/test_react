import styled from 'styled-components';

export const MoviesContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MovieListItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 2rem;
`;

export const LoadingMore = styled.button`
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
