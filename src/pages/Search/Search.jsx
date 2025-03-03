import React, { useEffect } from 'react';
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, setDebouncedSearch]);

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
          <ClearButton
            onClick={clearSearch}
            show={searchTerm.length > 0}
            aria-label="Clear search"
          >
            ×
          </ClearButton>
        </SearchContainer>
      </Header>
      <MainContent>
        <Movies />
      </MainContent>
    </PageContainer>
  );
}
