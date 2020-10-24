// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Rate } from '../Rate'
// ------------------------------ import styles and images
import { ExpCreationContainer, ExpForm, Rating, Map } from './styles';
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const ExperienceForm = () => {
  return (
    <ExpCreationContainer>
      <h2>Create your experience</h2>
      <ExpForm>
        <input type="text" placeholder='Create Name of the Experience' />
        <input type="text" placeholder='Create Location' />
        <input type="button" value="Duration"/>
        <input type="button" value="Transport"/>
        <input type="text"  placeholder='Create Tag' />
        <Rating>
          <p>Rating Stars</p>
          <Rate />
        </Rating>
        <Map />
      </ExpForm>
    </ExpCreationContainer>
  );
};
