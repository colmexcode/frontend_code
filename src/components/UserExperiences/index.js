// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';
import { AddExperienceCard } from '../AddExperienceCard';

// ------------------------------ import styles and images
import { ExperienceGrid } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const UserExperiences = () => {
  const selection = useSelector(
    (state) => state.userReducer.selection,
  );

  return (
    <ExperienceGrid>
      <AddExperienceCard />
    </ExperienceGrid>
  );
};
