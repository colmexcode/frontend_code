// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { UserHero } from '../../components/UserHero';
import { Footer } from '../../components/Footer';
import { LocationCard } from '../../components/LocationCard';

// ------------------------------ import styles and images

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const UserPage = () => {
  return (
    <>
      <UserHero />
      {/* <LocationCard /> */}
      <Footer />
    </>
  );
};
