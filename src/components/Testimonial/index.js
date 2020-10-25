// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';
import { StyledTestimonial } from './styles';

// -------- import redux actions
import { showTestimonial } from '../../actions/testimonialActions';

// ------------------------------------ COMPONENT ------------------------------------//
// This is a small component that show the user that has given a testimonial to the app.
// This component shows the picture and name of the user.
// When user click it shows the testimonial card.

export const Testimonial = ({ left, top }) => {
  const dispatch = useDispatch();

  function showTestimonialCard() {
    dispatch(showTestimonial());
  }

  return (
    <StyledTestimonial
      left={`${left}%`}
      top={`${top}%`}
      onClick={showTestimonialCard}
    >
      <img src={mockupPortrait} alt="" />
      <h3>Fulana de tal</h3>
    </StyledTestimonial>
  );
};
