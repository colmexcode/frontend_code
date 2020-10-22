// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { Map } from '../../components/Map';
import { LocationCard } from '../../components/LocationCard';
import { Footer } from '../../components/Footer';
import { TestimonialSection } from '../../components/TestimonialSection';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landing page.
// This page has login or sign up buttons, the search bar, features location and testiomanials

export const LandingPage = () => {
  const mousePosition = useGetMousePosition();
  return (
    <>
      <Hero />
      <Map />
      <LocationCard top={mousePosition.y} left={mousePosition.x} />
      <TestimonialSection />
      <Footer />
    </>
  );
};
