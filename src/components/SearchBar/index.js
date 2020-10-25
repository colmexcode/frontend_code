// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import {
  SearchBarStyled,
  SearchContainer,
  SearchInput,
  Title,
} from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this component is the search bar to get the experiences
export const SearchBar = () => {
  return (
    <SearchBarStyled>
      <Title> explore and travel </Title>
      <SearchContainer>
        <SearchInput
          aria-label="location"
          type="text"
          name="location"
          placeholder="Location"
        />
        <Icon type="search" />
      </SearchContainer>
    </SearchBarStyled>
  );
};
