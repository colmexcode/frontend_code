// ------------------------------ import libraries
import React from 'react';

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
      <Testimonial left={65} top={10} />
      <Testimonial left={10} top={60} />
      <Testimonial left={55} top={50} />
      {window.innerWidth > 400 ? (
        <>
          <Testimonial left={88} top={65} />
          <Testimonial left={35} top={20} />
        </>
      ) : null}
      <TestimonialCard />
    </StyledSection>
  );
};
