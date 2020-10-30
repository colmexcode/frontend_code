// ------------------------------ import libraries
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';
import { Button } from '../../global-styles/Buttons';
import { InputText, InputDate } from '../../global-styles/Inputs';
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
import { createPost } from '../../utils/createPost';

// ------------------------------------ COMPONENT ------------------------------------//

export const ExperienceForm = () => {
  const [rating, setrating] = useState(1);
  const user = JSON.parse(localStorage.getItem('VERIFY'));
  const [form, setForm] = useState({ user: user.id });
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector((state) => state.userReducer.userData);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    setForm({
      ...form,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(createExperience(form));
    await createPost(form, token);
    // history.push('/user');
  };

  useEffect(() => {
    setForm({ ...form, rating });
  }, [rating]);

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
            <Dropdown name="country" onChange={handleChange}>
              <option value="Mexico">Mexico</option>
              <option value="Colombia">Colombia</option>
            </Dropdown>
            <Dropdown name="location" onChange={handleChange}>
              <option value="Mexico">CDMX</option>
              <option value="Bogota">Bogota</option>
              <option value="Medellin">Medellin</option>
            </Dropdown>
            <Dropdown name="tags" onChange={handleChange}>
              <option value="5f9b54e3217dd209f45ecc55">Comida</option>
              <option value="Adventure Travel">Naturaleza</option>
              <option value="Nature">Ciduad</option>
            </Dropdown>
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
            <InputDate
              type="date"
              name="date"
              onChange={handleChange}
            />
            <Rating>
              <p>Rating Stars</p>
              <Rate setrating={setrating} rate={rating} />
            </Rating>
          </MainInputs>
          <Pics>
            <label htmlFor="image">
              {form.image ? (
                <img src={form.image} alt="" pic="true" />
              ) : (
                <Icon type="plus" />
              )}
              <input
                type="file"
                name="image"
                accept="image/jpg,png"
                id="image"
                onChange={handleFile}
              />
            </label>
          </Pics>
        </Inputs>
        <textarea
          name="description"
          maxLength="1500"
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
