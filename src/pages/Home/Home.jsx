import React, { useState } from 'react';
import {
  PageContainer,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  MainContent,
  MoviesSection,
  FavoritesSection,
} from './Home.style';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageContainer>
      <Header>
        <Title>Movie Search</Title>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchContainer>
      </Header>

      <MainContent>
        <MoviesSection>
          <p>Movie results will appear here</p>
        </MoviesSection>

        <FavoritesSection>
          <h2>Favorites</h2>
          <p>Your favorite movies will appear here</p>
        </FavoritesSection>
      </MainContent>
    </PageContainer>
  );
}
