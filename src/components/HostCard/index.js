// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';
import { Card, HostName, Image } from './styles';
import { Rate } from '../../components/Rate';

// -------- import redux actions
import { showTestimonial } from '../../actions/testimonialActions';

// ------------------------------------ COMPONENT ------------------------------------//
// This is a small component that show the user that has given a testimonial to the app.
// This component shows the picture and name of the user.
// When user click it shows the testimonial card.

export const HostCard = () => {
  return (
    <Card>
      <Image src={mockupPortrait} alt="Host picture" />
      <HostName>
        <h3>Host Name</h3>
        <Rate />
      </HostName>
    </Card>
  );
};
