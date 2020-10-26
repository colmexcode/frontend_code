// ------------------------------ import libraries
import React from 'react';
import { mount } from 'enzyme';

// ------------------------------ import components
import { Home } from '../../pages/Home';

// ------------------------------------ TESTS ------------------------------------//
describe('<Home />', () => {
  test('Render Home component', () => {
    const Home = mount(<Home />);
    expect(Home.length).toEqual(1);
  });
});
