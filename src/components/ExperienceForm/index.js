// ------------------------------ import libraries
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
  Inputs,
  MainInputs,
  SubmitButtons,
} from './styles';

// -------- import redux actions
import { createExperience } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//

export const ExperienceForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createExperience(form));
    history.push('/user');
  };

  return (
    <ExpCreationContainer>
      <h2>Create your experience</h2>
      <ExpForm onSubmit={handleSubmit}>
        <Inputs>
          <MainInputs>
            <InputText
              type="text"
              name="title"
              required="required"
              placeholder="Create Name of the Experience"
              onChange={handleChange}
            />
            <Dropdown name="duration" onChange={handleChange}>
              <option value="30 Min">30 Min</option>
              <option value="1 Hour">1 Hour</option>
              <option value="1.5 Hour">1.5 Hour</option>
              <option value="2 Hour">2 Hour</option>
              <option value="2.5 Hour">2.5 Hour</option>
              <option value="3 Hour">3 Hour</option>
              <option value="3.5 Hour">3.5 Hour</option>
              <option value="4 Hour">4 Hour</option>
              <option value="4.5 Hour">4.5 Hour</option>
            </Dropdown>
            <Dropdown name="location" onChange={handleChange}>
              <option value="Mexico">Mexico</option>
              <option value="Bogota">Bogota</option>
              <option value="Medellin">Medellin</option>
            </Dropdown>
            <Dropdown name="tags" onChange={handleChange}>
              <option value="City">City</option>
              <option value="Adventure Travel">
                Adventure Travel
              </option>
              <option value="Nature">Nature</option>
            </Dropdown>
            <Rating>
              <p>Rating Stars</p>
              <Rate />
            </Rating>
          </MainInputs>
          <Pics>
            <label htmlFor="image">
              <Icon type="plus" />
              <input
                type="file"
                name="image"
                accept="image/png"
                id="image"
                onChange={handleFile}
              />
            </label>
          </Pics>
        </Inputs>
        <textarea
          name="description"
          maxLength="600"
          placeholder="Create you description"
          onChange={handleChange}
        />
        <SubmitButtons>
          <Button name="cancel" onClick={() => history.push('/user')}>
            Cancelar
          </Button>
          <Button main type="submit">
            Crear
          </Button>
        </SubmitButtons>
      </ExpForm>
    </ExpCreationContainer>
  );
};
