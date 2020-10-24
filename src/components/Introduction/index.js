// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import { Button } from '../../global-styles/Buttons';
import { Titule, StyledIntroduction, Description } from './styles';

// -------- import redux actions
import { openSign } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the description of the app in the landing page.

export const Introduction = () => {
  const dispatch = useDispatch();

  // this function open the sign in modal
  const openSignModal = () => dispatch(openSign());

  return (
    <StyledIntroduction>
      <Titule>Cozy Place</Titule>
      <Description>
        For decades travellers have reached for Lonely Planet books
        when looking to plan and execute their perfect trip, but now,
        they can also let Lonely Planet Experiences lead the way.
      </Description>
      <Button big onClick={openSignModal}>
        Sign up
      </Button>
    </StyledIntroduction>
  );
};
