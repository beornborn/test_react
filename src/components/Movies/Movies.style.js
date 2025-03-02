import styled from 'styled-components';

export const MoviesContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MoviesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  padding: 2rem;
`;
