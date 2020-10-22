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
  const [show, setshow] = useState(false);

  // this functions show and close the detail card
  const showTestimonial = () => setshow(true);
  const closeTestimonial = () => setshow(false);

  return (
    <StyledSection>
      <h1>Testimonials</h1>
      <Testimonial left={0} top={15} handleClick={showTestimonial} />
      <Testimonial left={75} top={10} handleClick={showTestimonial} />
      <Testimonial left={30} top={20} handleClick={showTestimonial} />
      <Testimonial left={55} top={55} handleClick={showTestimonial} />
      <Testimonial left={15} top={60} handleClick={showTestimonial} />
      <Testimonial left={85} top={65} handleClick={showTestimonial} />
      <TestimonialCard show={show} handleClick={closeTestimonial} />
    </StyledSection>
  );
};
