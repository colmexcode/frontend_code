// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { UserProfile } from '../../components/UserProfile';
import { Footer } from '../../components/Footer';
import { UserExperiences } from '../../components/UserExperiences';
import { SectionSelector } from '../../components/SectionSelector';
import { ResulIndicator } from '../../components/ResultIndicator';

// ------------------------------------ COMPONENT ------------------------------------//
// this page has the user data and the experiences created and favorites.

export default () => {
  return (
    <>
      <ResulIndicator />
      <Hero />
      <UserProfile />
      <SectionSelector />
      <UserExperiences />
      <Footer />
    </>
  );
};
