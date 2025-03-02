import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  Header,
  Title,
  SearchContainer,
  SearchInput,
} from './Home.style';
import { Movies } from '../../components/Movies';
import { useMovieSearch } from '../../hooks/useMovies';

export function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const { data, isLoading, error } = useMovieSearch(debouncedSearch);

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
      <Movies
        isLoading={isLoading}
        error={error}
        searchTerm={searchTerm}
        data={data}
      />
    </PageContainer>
  );
}
