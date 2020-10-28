// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';
// ------------------------------ import styles and images
import {
  ExpCreationContainer,
  ExpForm,
  Rating,
  Map,
  CityButton,
  Pics,
  CancelButton,
  SubmitButton,
} from './styles';
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//

export const ExperienceForm = () => {
  return (
    <ExpCreationContainer>
      <h2>Create your experience</h2>
      <ExpForm>
        <input
          type="text"
          placeholder="Create Name of the Experience"
        />
        <input type="text" placeholder="Create Location" />
        <div>
          <input type="button" value="Duration" />
          <div>
            <p>5 min</p>
            <p>15 min</p>
            <p>30 min</p>
          </div>
        </div>
        <input type="text" placeholder="Create Tag" />
        <div>
          <CityButton />
          <div>
            <p>México</p>
            <p>Bogotá</p>
          </div>
        </div>
        <Rating>
          <p>Rating Stars</p>
          <Rate />
        </Rating>
        <Pics>
          <Icon src="arrowLeft" />
          <Icon src="addPicture" />
          <Icon src="arrowRight" />
        </Pics>
        <textarea
          maxLength="400"
          placeholder="Create you description that does not exceed more than 400 characters"
        />
        <CancelButton>Cancelar</CancelButton>
        <SubmitButton>Crear</SubmitButton>
      </ExpForm>
    </ExpCreationContainer>
  );
};
