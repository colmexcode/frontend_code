// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import styles and images
import { Card, Description } from './styles';
import mockupPicture from '../../assets/images/mockupPicture.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// this card display a ditail of the location in the section feature destinations at landing page
// It is hidden and is shown when user hover the location mark in the map.

export const LocationCard = ({ left, top }) => {
  const show = useSelector((state) => state.mapReducer.show);

  return (
    <Card show={show} left={`${left}px`} top={`${top}px`}>
      <img src={mockupPicture} alt="location" />
      <Description>
        <p>Raja Ampat</p>
        <small>indonesia</small>
      </Description>
    </Card>
  );
};
