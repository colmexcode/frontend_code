// ------------------------------ import libraries
import React from 'react';
import { mount } from 'enzyme';

// ------------------------------ import components
import { TrendingSection } from '../../components/TrendingSection';

// ------------------------------------ TESTS ------------------------------------//
describe('<TrendingSection />', () => {
  const trendingSection = mount(<TrendingSection />);
  test('Render TrendingSection component', () => {
    expect(trendingSection.length).toEqual(1);
  });
});
