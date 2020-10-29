// ------------------------------ import libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';
import { Button } from '../../global-styles/Buttons';
import { InputText } from '../../global-styles/Inputs';
// ------------------------------ import styles and images
import {
  ExpCreationContainer,
  ExpForm,
  Rating,
  Dropdown,
  Pics,
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
        'https://cozyplace.herokuapp.com/api/post/create',
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
      return response.json();
    } catch (error) {
      console.log(error + 'ocurrio un error');
    }
  };

  return (
    <ExpCreationContainer>
      <h2>Create your experience</h2>
      <ExpForm onSubmit={handleSubmit}>
        <InputText
          type="text"
          id="title"
          name="inputTitle"
          required="required"
          placeholder="Create Name of the Experience"
          onChange={handleChange}
        />
        <InputText
          type="text"
          id="location"
          name="inputLocation"
          required="required"
          placeholder="Create Location"
          onChange={handleChange}
        />
        <InputText
          type="text"
          id="tag"
          name="inputTag"
          required="required"
          placeholder="Create Tag"
          onChange={handleChange}
        />
        <Dropdown>
          <Button name="duration">Duration</Button>
          <div>
            <p>5 Min</p>
            <p>15 Min</p>
            <p>30 Min</p>
          </div>
        </Dropdown>
        <Dropdown>
          <Button name="city">City</Button>
          <div>
            <p>México</p>
            <p>Bogotá</p>
            <p>Medellín</p>
          </div>
        </Dropdown>
        <Rating>
          <p>Rating Stars</p>
          <Rate />
        </Rating>
        <Pics>
          <Icon src="arrowLeft" />
          <Icon src="plus" />
          <Icon src="arrowRight" />
        </Pics>
        <textarea
          maxLength="400"
          placeholder="Create you description that does not exceed more than 400 characters"
        />
        <Link to="/">
          <Button name="cancel">Cancelar</Button>
        </Link>
        <Link to="#">
          <Button main={true} type="submit">
            Crear
          </Button>
        </Link>
      </ExpForm>
    </ExpCreationContainer>
  );
};
