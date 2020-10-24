// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { ExperienceHost } from '../../components/ExperienceHost';
import { Footer } from '../../components/Footer';

// ------------------------------ import styles and images
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ExperienceDetails = () => {
  return (
    <>
      <Hero />
      <ExperienceHost />
      <Footer />
    </>
  );
};
