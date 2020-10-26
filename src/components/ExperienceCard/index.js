// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Rate } from '../Rate';

// ------------------------------ import styles and images
import { CardStyled, CardImg, TitleCard } from './styles';
import homeImg1 from '../../assets/images/homeImg1.jpg';

// ------------------------------------ COMPONENT ------------------------------------//
// this card shows the experiences, their rating and name.
// it is in diferent pages, so it's styles has many validations to the difernts positions in the diferentes grids

export const ExperienceCard = ({ position, page }) => {
  return (
    <CardStyled to="/" position={`${page}${position}`}>
      <Rate />
      <div>
        <CardImg src={homeImg1} alt="travel image #1" />
        <TitleCard>Texto de prueba</TitleCard>
      </div>
    </CardStyled>
  );
};
