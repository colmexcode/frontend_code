// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { UserHero } from '../../components/UserHero';
// import { Map } from '../../components/Map';
// import { UserProfile } from '../../component/UserProfile';
import { Footer } from '../../components/Footer';
import { LocationCard } from '../../components/LocationCard';
// import { UserProfile } from '../../components/UserProfile';
import { UserExperiences } from '../../components/UserExperiences';

// ------------------------------ import styles and images

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const UserPage = () => {
  return (
    <>
      <UserHero />
      {/* <UserProfile /> */}
      <UserExperiences />
      {/* <UserProfile /> */}
      {/* <LocationCard /> */}
      <Footer />
    </>
  );
};
