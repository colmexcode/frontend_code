// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import components
import { Testimonial } from '../Testimonial';
import { TestimonialCard } from '../../components/TestimonialCard';

// ------------------------------ import styles and images
import { StyledSection } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the testimonial section. It has the user comments of the app.
// When the user click any Testimonial appears the card with the comment of the person clicked.

export const TestimonialSection = () => {
  return (
    <StyledSection>
      <h1>Testimonials</h1>
      <Testimonial left={0} top={15} />
      <Testimonial left={75} top={10} />
      <Testimonial left={35} top={20} />
      <Testimonial left={55} top={50} />
      <Testimonial left={15} top={60} />
      <Testimonial left={88} top={65} />
      <TestimonialCard />
    </StyledSection>
  );
};
