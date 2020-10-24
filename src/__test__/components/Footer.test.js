// ------------------------------ import libraries
import React from 'react';
import { mount } from 'enzyme';

// ------------------------------ import components
import { Footer } from '../../components/Footer';

// ------------------------------------ TESTS ------------------------------------//
describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });
});
