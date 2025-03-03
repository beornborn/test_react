import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  ClearButton,
  MainContent,
} from './Search.style';
import { Movies } from '../../components/Movies';

export function Search() {
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

  const handleClearSearch = () => {
    setSearchTerm('');
    setDebouncedSearch('');
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
          <ClearButton
            onClick={handleClearSearch}
            show={searchTerm.length > 0}
            aria-label="Clear search"
          >
            ×
          </ClearButton>
        </SearchContainer>
      </Header>
      <MainContent>
        <Movies searchTerm={debouncedSearch} />
      </MainContent>
    </PageContainer>
  );
}
