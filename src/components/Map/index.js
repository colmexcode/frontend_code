// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { LocationCard } from '../LocationCard';

// ------------------------------ import styles and images
import { StyledMap, MapImg } from './styles';
import map from '../../assets/images/map.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const Map = () => {
  return (
    <StyledMap>
      <h1> Features Destinations </h1>
      <MapImg src={map} alt="" />
      <LocationCard />
    </StyledMap>
  );
};
