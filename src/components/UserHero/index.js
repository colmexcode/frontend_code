// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { UserHeader } from '../UserHeader';
// import { SearchBar } from '../SearchBar';
// import { UserProfile } from '../UserProfile';
// import { Introduction } from '../Introduction';

// ------------------------------ import styles and images
import { StyledHero, HeroImage } from './styles';
import heroPicture from '../../assets/images/heroPicture.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// the Hero is the first component in each page. It have the header and the seachbar.
// It change if user is logged.
// In landing it show and extra component, Intrduction. It shows the name and a short description of the app.

export const UserHero = () => {
  return (
    <StyledHero>
      <HeroImage
        src={heroPicture}
        alt="A woman is pointing to a map in a road trip"
      />
      <UserHeader />
      {/* <UserProfile /> */}
      {/* <SearchBar /> */}
    </StyledHero>
  );
};
