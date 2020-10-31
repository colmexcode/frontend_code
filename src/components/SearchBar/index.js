// ------------------------------ import libraries
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import {
  SearchBarStyled,
  SearchContainer,
  SearchInput,
  Title,
} from './styles';

// -------- import redux actions
import { searchExperiences } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this component is the search bar to get the experiences
export const SearchBar = ({ focus }) => {
  const { token } = useSelector(
    (state) => state.userReducer.userData,
  );
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  function handleInput(e) {
    setSearch(e.target.value);
  }

  function handleSearch() {
    dispatch(searchExperiences(search));
    if (!token) {
      focus();
    }
  }

  return (
    <SearchBarStyled>
      <Title> explore and travel </Title>
      <SearchContainer>
        <SearchInput
          aria-label="location"
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleInput}
        />
        <Icon type="search" click={handleSearch} />
      </SearchContainer>
    </SearchBarStyled>
  );
};
