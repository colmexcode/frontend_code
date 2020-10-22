// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { Map } from '../../components/Map';
import { Footer } from '../../components/Footer';
import { TestimonialSection } from '../../components/TestimonialSection';

// ------------------------------ import styles and images

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landing page.
// This page has login or sign up buttons, the search bar, features location and testiomanials

export const LandingPage = () => {
  return (
    <>
      <Hero />
      <Map />
      <TestimonialSection />
      <Footer />
    </>
  );
};
