// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Landmark } from '../Landmark';

// ------------------------------ import styles and images
import { StyledSection, StyledMap, MapImg } from './styles';
import map from '../../assets/images/map.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Map = () => {
  return (
    <StyledSection>
      <h1> Features Destinations </h1>
      <StyledMap>
        <MapImg src={map} alt="" />
        <Landmark left={330} top={380} />
        <Landmark left={400} top={450} />
      </StyledMap>
    </StyledSection>
  );
};
