// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { ExperienceForm } from '../../components/ExperienceForm';
import { Footer } from '../../components/Footer';

// ------------------------------ import styles and images
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export default () => {
  return (
    <>
      <Hero />
      <ExperienceForm />
      <Footer />
    </>
  );
};
