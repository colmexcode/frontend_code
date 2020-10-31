// ------------------------------ import libraries
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';

// ------------------------------ import styles and images
import { MainStyled } from './styles';

// -------- import redux actions
import { getAllExperiences } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the layout to show the experiences in home page.

export const ExperiencesLayout = () => {
  const dispatch = useDispatch();
  const experiences = useSelector(
    (state) => state.experiencesReducer.searchExperiences,
  );

  useLayoutEffect(() => {
    dispatch(getAllExperiences());
  }, []);

  return (
    <MainStyled>
      {experiences.slice(0, 10).map((experience, i = 0) => {
        i++;
        return (
          <ExperienceCard
            position={i}
            page="home"
            key={experience._id}
            {...experience}
          />
        );
      })}
    </MainStyled>
  );
};
