import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background};
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.25rem;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const MainContent = styled.main`
  min-height: 200px;
`;
