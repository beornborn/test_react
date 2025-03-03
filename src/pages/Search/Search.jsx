import React, { useEffect, useRef } from 'react';
import {
  PageContainer,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  ClearButton,
  MainContent,
} from './Search.style';
import { Movies } from '../../components/Movies/Movies';
import { useSearchStore } from '../../store/search';

export function Search() {
  const { searchTerm, setSearchTerm, setDebouncedSearch, clearSearch } =
    useSearchStore();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setDebouncedSearch]);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageContainer role="region" aria-label="Movie Search Page">
      <Header>
        <Title id="search-title">Movie Search</Title>
        <SearchContainer role="search" aria-labelledby="search-title">
          <SearchInput
            ref={searchInputRef}
            type="text"
            placeholder="Search for movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            aria-label="Search movies"
            aria-describedby="search-description"
          />
          <span id="search-description" className="sr-only">
            Type to search for movies. Results will update as you type.
          </span>
          {searchTerm.length > 0 && (
            <ClearButton onClick={clearSearch} aria-label="Clear search">
              ×
            </ClearButton>
          )}
        </SearchContainer>
      </Header>
      <MainContent role="region" aria-label="Search Results">
        <Movies />
      </MainContent>
    </PageContainer>
  );
}
