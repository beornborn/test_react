import styled from 'styled-components';

export const FavoritesContainer = styled.aside`
  width: 300px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const FavoritesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1rem;
  font-size: 1.25rem;
`;

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const EmptyMessage = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  padding: 1rem;
`;
