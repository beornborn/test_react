import styled from 'styled-components';

export const Card = styled.div`
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
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Year = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
`;
