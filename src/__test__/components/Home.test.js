// ------------------------------ import libraries
import React from 'react';
import { shallow } from 'enzyme';

// ------------------------------ import components
import { HomePage } from '../../pages/Home';
import { ProviderMock } from '../../__mocks__/ProviderMock';

// ------------------------------------ TESTS ------------------------------------//
describe('<HomePage />', () => {
  const home = shallow(
    <ProviderMock>
      <HomePage />
    </ProviderMock>,
  );
  test('Render Home component', () => {
    expect(home.length).toEqual(1);
  });
});