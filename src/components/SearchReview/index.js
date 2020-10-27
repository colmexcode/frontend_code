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
export const SearchReview = () => {
  return (
    <SearchBarStyled>
      <SearchContainer>
        <SearchInput type="text" name="" placeholder="205 Reviews" />
      </SearchContainer>
    </SearchBarStyled>
  );
};
