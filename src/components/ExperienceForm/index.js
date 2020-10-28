// ------------------------------ import libraries
import React, { useState } from 'react';

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

let data = {
  inputTitle: '',
  inputLocation: '',
  inputTag: '',
};
export const ExperienceForm = () => {
  // const [ data, setData ] = useState()
  const handleChange = ({ target }) => {
    data = {
      ...data,
      [target.name]: target.value,
    };
    return data;
    // setData((prev) => ({
    //   ...prev,
    //   [target.name]: target.value,
    // }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://cozyplace.herokuapp.com/api/show/topLocations',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      console.log(response);
      return response.json()
    } catch (error) {
      console.log(error + 'ocurrio un error');
    }
  };

  return (
    <ExpCreationContainer>
      <h2>Create your experience</h2>
      <ExpForm onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="inputTitle"
          required="required"
          placeholder="Create Name of the Experience"
          onChange={handleChange}
        />
        <input
          type="text"
          id="location"
          name="inputLocation"
          required="required"
          placeholder="Create Location"
          onChange={handleChange}
        />
        <div>
          <input type="button" value="Duration" />
          <div>
            <p>5 min</p>
            <p>15 min</p>
            <p>30 min</p>
          </div>
        </div>
        <input
          type="text"
          id="tag"
          name="inputTag"
          required="required"
          placeholder="Create Tag"
          onChange={handleChange}
        />
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
        <SubmitButton type="submit">Crear</SubmitButton>
      </ExpForm>
    </ExpCreationContainer>
  );
};
