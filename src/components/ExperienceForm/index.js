// ------------------------------ import libraries
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';
import { Button } from '../../global-styles/Buttons';
import { InputText, InputDate } from '../../global-styles/Inputs';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';

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
import { createPost } from '../../utils/createPost';
import { useFetchData } from '../../hooks/useFetchData';
import {
  showIndicator,
  setIndicatorPosition,
} from '../../actions/experiencesActions';
import { setSelection } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
export const ExperienceForm = () => {
  const dispatch = useDispatch();
  const mousePosition = useGetMousePosition();

  const tags = useFetchData(
    'https://cozyplace.herokuapp.com/api/tag/',
  );
  const [rating, setrating] = useState(1);
  const { token, _id } = useSelector(
    (state) => state.userReducer.userData,
  );
  const [form, setForm] = useState({ user: _id });
  const history = useHistory();

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
    // console.log(form);
    /** */
    console.log('Aqui va el form');
    console.log(form);
    console.log('Aqui va el form.country');
    console.log(form.country);
    // const formData = new FormData(JSON.stringify(form));
    let form_data = new FormData();
    for (let key in form) {
      console.log(form[key]);
      form_data.append(key, form[key]);
    }
    for (var p of form_data) {
      console.log(p);
    }
    // formData.append('country', form.country);
    // formData.append('date', form.date);
    // formData.append('description', form.description);
    // formData.append('duration', form.duration);
    // formData.append('image', form.image);
    // formData.append('location', form.location);
    // formData.append('rating', form.rating);
    // formData.append('tags', form.tags);
    // formData.append('title', form.title);
    // formData.append('user', form.user);

    console.log('Aqui va el formData');
    console.log(form_data);
    /** */
    const response = await createPost(form_data, token);
    console.log(response);
    if (response.status === 200) {
      dispatch(
        showIndicator({
          status: true,
          message: 'Experience Successfully Created 🎉',
        }),
      );
      dispatch(setIndicatorPosition(mousePosition));
      dispatch(setSelection('favorites'));

      history.push('/user');
    } else if (response.status === 400) {
      dispatch(
        showIndicator({
          status: true,
          message: 'Missing data, fill in all the fields ❌',
        }),
      );
      dispatch(setIndicatorPosition(mousePosition));
    }
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
              <option value="Mexico">Cancun</option>
              <option value="Mexico">Guadalajara</option>
              <option value="Mexico">Mexico City</option>
              <option value="Mexico">Monterrey</option>
              <option value="Mexico">Merida</option>
              <option value="Mexico">Oaxaca</option>
              <option value="Mexico">Puebla</option>
              <option value="Mexico">Queretaro</option>
              <option value="Medellin">Barranquilla</option>
              <option value="Bogota">Bogota</option>
              <option value="Medellin">Bucaramanga</option>
              <option value="Medellin">Cali</option>
              <option value="Medellin">Cartagena</option>
              <option value="Medellin">Medellin</option>
              <option value="Medellin">Santa Marta</option>
            </Dropdown>
            <Dropdown name="tags" onChange={handleChange}>
              {tags.map((tag) => (
                <option key={tag._id} value={tag._id}>
                  {tag.tagname}
                </option>
              ))}
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
              <option value="4.5 Hour">1 Day</option>
              <option value="4.5 Hour">2 Days</option>
              <option value="4.5 Hour">3 Days</option>
              <option value="4.5 Hour">4 Days</option>
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
