import React from 'react';
import { PageContainer, Title, MainContent } from './Favorites.style';
import { Favorites as FavoritesList } from '../../components/Favorites/Favorites';

export function Favorites() {
  return (
    <PageContainer>
      <Title>My Favorite Movies</Title>
      <MainContent>
        <FavoritesList />
      </MainContent>
    </PageContainer>
  );
}
