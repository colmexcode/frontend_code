// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';

// ------------------------------ import styles and images
import { MainStyled } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the layout to show the experiences in home page.

export const ExperiencesLayout = () => {
  return (
    <MainStyled>
      <ExperienceCard position={1} page="home" />
      <ExperienceCard position={2} page="home" />
      <ExperienceCard position={3} page="home" />
      <ExperienceCard position={4} page="home" />
      <ExperienceCard position={5} page="home" />
      <ExperienceCard position={6} page="home" />
      <ExperienceCard position={7} page="home" />
      <ExperienceCard position={8} page="home" />
      <ExperienceCard position={9} page="home" />
      <ExperienceCard position={10} page="home" />
    </MainStyled>
  );
};
