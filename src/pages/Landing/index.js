// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { Footer } from '../../components/Footer';
import { LocationCard } from '../../components/LocationCard';
import { TestimonialCard } from '../../components/TestimonialCard';

// ------------------------------ import styles and images

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const LandingPage = () => {
  return (
    <>
      <Hero />
      <TestimonialCard />
      <LocationCard />
      <Footer />
    </>
  );
};
