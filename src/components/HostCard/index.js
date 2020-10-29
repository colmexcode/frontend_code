// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';
import { Card, HostName, Image } from './styles';
import { Rate } from '../Rate';

// ------------------------------------ COMPONENT ------------------------------------//

export const HostCard = ({ name, rating }) => {
  return (
    <Card>
      <Image src={mockupPortrait} alt="Host picture" />
      <HostName>
        <h2>{name}</h2>
        <Rate rate={rating} />
      </HostName>
    </Card>
  );
};
