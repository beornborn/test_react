import styled from 'styled-components';

export const Card = styled.article`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme, isFavorite }) =>
    isFavorite
      ? `0 4px 12px ${theme.colors.primary}20, 0 2px 4px rgba(0, 0, 0, 0.1)`
      : `0 1px 3px ${theme.colors.shadow}`};
  transition: all 0.2s ease;
  border: ${({ theme, isFavorite }) =>
    isFavorite ? `2px solid ${theme.colors.primary}` : '1px solid transparent'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme, isFavorite }) =>
      isFavorite
        ? `0 8px 16px ${theme.colors.primary}30, 0 4px 8px rgba(0, 0, 0, 0.1)`
        : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Poster = styled.img`
  width: 7.5rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 0.25rem;

  @media (max-width: 480px) {
    width: 10rem;
    height: 15rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Year = styled.time`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;

export const LikeButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.primary};
  transition: opacity 0.2s ease;
  opacity: ${({ isFavorite }) => (isFavorite ? 1 : 0.5)};

  &:hover {
    opacity: 1;
  }
`;
