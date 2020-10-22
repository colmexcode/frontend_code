// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Cards } from '../../components/Cards';
import { Hero } from '../../components/Hero';
import { Main } from '../../components/Main';


// ------------------------------ import styles and images


// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const HomePage = () => {
  return (
    <>
        <Hero />
        <Main>
            <Cards />
        </Main>
    </>
  );
};