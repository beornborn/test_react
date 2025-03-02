import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
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

export const Year = styled.span`
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
