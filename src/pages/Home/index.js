// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { ExperiencesLayout } from '../../components/ExperiencesLayout';
import { Footer } from '../../components/Footer';

// -------------------Redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this pages is the home.
// at first it has the top experiences according to the preferences of the user.
// user can search and find experiences by destinations.

export default () => {
  return (
    <>
      <Hero />
      <ExperiencesLayout />
      <Footer />
    </>
  );
};
