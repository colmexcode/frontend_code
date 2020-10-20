// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';

// ------------------------------ import styles and images
import { StyledHero, HeroImage } from './styles';
import heroPicture from '../../assets/images/heroPicture.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// this component has the header and the searchbar
export const Hero = () => {
  return (
    <StyledHero>
      <HeroImage
        src={heroPicture}
        alt="A woman is pointing to a map in a road trip"
      />
      <Header />
      {/* <SearchBar /> */}
    </StyledHero>
  );
};
