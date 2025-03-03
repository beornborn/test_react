import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  margin: 0 0 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MainContent = styled.main`
  min-height: 200px;
`;
