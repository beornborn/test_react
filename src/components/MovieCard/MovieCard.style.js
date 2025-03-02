import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Poster = styled.img`
  width: 7.5rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 0.25rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  margin: 0 0 0.5rem;
  color: #2d3748;
`;

export const Year = styled.span`
  color: #718096;
  font-size: 0.875rem;
`;
