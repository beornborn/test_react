import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterLink,
} from './Footer.style';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterText>
          Movie data provided by{' '}
          <FooterLink
            href="http://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="OMDB API (opens in new tab)"
          >
            OMDB API
          </FooterLink>
        </FooterText>
        <FooterText>
          <FooterLink
            href="https://github.com/beornborn/test_react"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub (opens in new tab)"
          >
            View source code
          </FooterLink>
        </FooterText>
        <FooterText>
          © {currentYear} Movie Explorer. All rights reserved.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
