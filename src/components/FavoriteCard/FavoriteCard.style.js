import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.shadow};
`;

export const Poster = styled.img`
  width: 7.5rem;
  height: 11rem;
  border-radius: 0.25rem;
  object-fit: cover;
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

export const RemoveButton = styled.button`
  position: absolute;
  display: block;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
