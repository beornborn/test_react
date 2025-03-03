import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ClearButton = styled.button`
  display: block;
  position: absolute;
  top: 50%;
  right: 0.5rem;
  padding: 0.25rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const MainContent = styled.main`
  min-height: 200px;
`;
