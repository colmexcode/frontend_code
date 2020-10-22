// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components

// ------------------------------ import styles and images
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';
import { StyledTestimonial } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// This is a small component that show the user that has given a testimonial to the app.
// This component shows the picture and name of the user.
// When user click it shows the testimonial card.

export const Testimonial = ({ left, top, handleClick }) => {
  return (
    <StyledTestimonial
      left={`${left}%`}
      top={`${top}%`}
      onClick={handleClick}
    >
      <img src={mockupPortrait} alt="" />
      <h3>Fulana de tal</h3>
    </StyledTestimonial>
  );
};
