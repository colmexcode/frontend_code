// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { Button } from '../../global-styles/Buttons';
import { Titule, StyledIntroduction, Description } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the description of the app in the landing page
export const Introduction = () => {
  return (
    <StyledIntroduction>
      <Titule>Cozi Place</Titule>
      <Description>
        For decades travellers have reached for Lonely Planet books
        when looking to plan and execute their perfect trip, but now,
        they can also let Lonely Planet Experiences lead the way.
      </Description>
      <Button big>Sign up</Button>
    </StyledIntroduction>
  );
};
