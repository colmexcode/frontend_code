// ------------------------------ import libraries
import React from 'react';
import { mount } from 'enzyme';

// ------------------------------ import components
import { SearchBar } from '../../components/SearchBar';

// ------------------------------------ TESTS ------------------------------------//
describe('<SearchBar />', () => {
  const searchBar = mount(<SearchBar />);
  test('Render SearchBar component', () => {
    expect(searchBar.length).toEqual(1);
  });
});
