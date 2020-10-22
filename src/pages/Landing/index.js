// ------------------------------ import libraries
import React, { useRef } from 'react';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { Map } from '../../components/Map';
import { LocationCard } from '../../components/LocationCard';
import { Footer } from '../../components/Footer';
import { TestimonialSection } from '../../components/TestimonialSection';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';
import { LoginModal } from '../../components/LoginModal';
import { TrendingSection } from '../../components/TrendingSection';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landing page.
// This page has login or sign up buttons, the search bar, features location and testiomanials

export const LandingPage = () => {
  const mousePosition = useGetMousePosition();
  const modalRef = useRef();

  return (
    <>
      <Hero />
      <Map />
      <LocationCard top={mousePosition.y} left={mousePosition.x} />
      <TrendingSection />
      <TestimonialSection />
      <Footer />
      <LoginModal ref={modalRef} />
    </>
  );
};
