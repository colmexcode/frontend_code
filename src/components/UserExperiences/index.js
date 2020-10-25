// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { UserExperienceCard } from '../UserExperienceCard';
import { UserProfile } from '../UserProfile';

// ------------------------------ import styles and images
import {
  ExperienceSelector,
  Selector,
  ExperienceGrid,
} from './styles';
import { LinkStyled as Link } from '../../global-styles/Links';
// import map from '../../assets/images/map.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const UserExperiences = () => {
  return (
    <ExperienceSelector>
      <UserProfile />
      <Selector>
        <ul>
          <li>
            <Link>My experiences</Link>
          </li>
          <li>
            <Link>Favorites</Link>
          </li>
        </ul>
      </Selector>
      <ExperienceGrid>
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
        <UserExperienceCard />
      </ExperienceGrid>
    </ExperienceSelector>
  );
};
