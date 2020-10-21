// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components

// ------------------------------ import styles and images
import { Card, Description } from './styles';
import mockupPicture from '../../assets/images/mockupPicture.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// this card display a ditail of the location in the section feature destinations at landing page

export const LocationCard = () => {
  let left = '20px';
  let top = '20px';

  return (
    <Card left={left} top={top}>
      <img src={mockupPicture} alt="location" />
      <Description>
        <p>Raja Ampat</p>
        <small>indonesia</small>
      </Description>
    </Card>
  );
};
