import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin-top: auto;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FooterText = styled.p`
  margin: 0.5rem 0;
  font-size: 0.875rem;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
