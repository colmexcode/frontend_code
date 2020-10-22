// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ExperienceCard } from '../../components/ExperienceCard';
import { Hero } from '../../components/Hero';
import { ExperiencesLayout } from '../../components/ExperiencesLayout';

// ------------------------------ import styles and images


// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const HomePage = () => {
  return (
    <>
        <Hero />
        <ExperiencesLayout>
            <ExperienceCard />
        </ExperiencesLayout>
    </>
  );
};