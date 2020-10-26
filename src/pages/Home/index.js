// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ExperienceCard } from '../../components/ExperienceCard';
import { Hero } from '../../components/Hero';
import { ExperiencesLayout } from '../../components/ExperiencesLayout';
import { Footer } from '../../components/Footer';
// ------------------------------ import styles and images

// ------------------------------------ COMPONENT ------------------------------------//
// this pages is the home.
// at first it has the top experiences according to the preferences of the user.
// user can search and find experiences by destinations.

export const HomePage = () => {
  return (
    <>
      <Hero />
      <ExperiencesLayout>
        <ExperienceCard />
      </ExperiencesLayout>
      <Footer />
    </>
  );
};
