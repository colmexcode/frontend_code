// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Cards } from '../../components/Cards';
import { Hero } from '../../components/Hero';
import { MainHome } from '../../components/MainHome';

// ------------------------------ import styles and images


// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const HomePage = () => {
  return (
    <>
        <Hero />
        <MainHome>
            <Cards />
        </MainHome>
    </>
  );
};