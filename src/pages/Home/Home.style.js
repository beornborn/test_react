import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 75rem;
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 31.25rem;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.white};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 2rem;
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color 0.2s ease;
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MainContent = styled.main`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const MoviesSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MoviesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FavoritesSection = styled.aside`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  width: 18.75rem;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    order: -1; // Makes favorites appear first on mobile
  }
`;

export const Message = styled.p`
  color: #718096;
  text-align: center;
  padding: 2rem;
`;
