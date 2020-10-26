// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { UserHero } from '../../components/UserHero';
import { UserProfile } from '../../components/UserProfile';
import { Footer } from '../../components/Footer';
import { UserExperiences } from '../../components/UserExperiences';
import { SectionSelector } from '../../components/SectionSelector';

// ------------------------------------ COMPONENT ------------------------------------//
// this page has the user data and the experiences created and favorites.

export const UserPage = () => {
  return (
    <>
      <UserHero />
      <UserProfile />
      <SectionSelector />
      <UserExperiences />
      <Footer />
    </>
  );
};
