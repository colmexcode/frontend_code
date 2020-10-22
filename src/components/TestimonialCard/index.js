// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';
import { Rate } from '../Rate';

// ------------------------------ import styles and images
import { Card, Image, Description } from './styles';
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const TestimonialCard = ({ show, handleClick }) => {
  return (
    <Card show={show}>
      <Icon type="close" click={handleClick} />
      <Image src={mockupPortrait} alt="" />
      <Description>
        <div>
          <h1>Fulana de tal</h1>
          <Rate />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been he industry's
          standard dummy text ever since the 1500s
        </p>
      </Description>
    </Card>
  );
};
