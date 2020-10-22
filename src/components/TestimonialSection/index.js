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
      <Testimonial left={5} top={15} handleClick={showTestimonial} />
      <Testimonial left={70} top={20} handleClick={showTestimonial} />
      <Testimonial left={30} top={25} handleClick={showTestimonial} />
      <Testimonial left={50} top={60} handleClick={showTestimonial} />
      <Testimonial left={20} top={60} handleClick={showTestimonial} />
      <Testimonial left={90} top={60} handleClick={showTestimonial} />
      <TestimonialCard show={show} handleClick={closeTestimonial} />
    </StyledSection>
  );
};
