// ------------------------------ import libraries
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';
import { AddExperienceCard } from '../AddExperienceCard';
import { getUserPosts } from '../../utils/PostUser';

// ------------------------------ import styles and images
import { ExperienceGrid } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const UserExperiences = () => {
  const [experiences, setexperiences] = useState([]);
  const token = useSelector((state) => state.userReducer.userData);
  const userId = JSON.parse(localStorage.getItem('VERIFY')).id;

  useEffect(() => {
    getUserPosts(userId, token).then((response) =>
      setexperiences(response),
    );
  }, []);
  console.log(experiences);
  console.log(token);
  console.log(userId);

  return (
    <ExperienceGrid>
      {experiences.map((experience) => (
        <ExperienceCard key={experience._id} {...experience} />
      ))}
      <AddExperienceCard />
    </ExperienceGrid>
  );
};
