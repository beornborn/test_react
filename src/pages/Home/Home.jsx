import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  MainContent,
} from './Home.style';
import { Movies } from '../../components/Movies';
import { Favorites } from '../../components/Favorites';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const handleSearchChange = event => {
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
            onChange={handleSearchChange}
          />
        </SearchContainer>
      </Header>
      <MainContent>
        <Movies searchTerm={debouncedSearch} />
        <Favorites />
      </MainContent>
    </PageContainer>
  );
}
