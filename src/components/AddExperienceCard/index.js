// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { CardStyled } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//

export const AddExperienceCard = () => {
  return (
    <CardStyled>
      <h3>Add an experience</h3>
      <Icon type="plus" />
    </CardStyled>
  );
};
