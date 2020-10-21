// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Card, Image, Description } from './styles';
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const TestimonialCard = () => {
  return (
    <Card>
      <Icon type="close" />
      <Image src={mockupPortrait} alt="" />
      <Description>
        <div>
          <h1>Fulana de tal</h1>
          <div>Stars</div>
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
