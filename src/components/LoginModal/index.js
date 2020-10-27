// ------------------------------ import libraries
import React, { forwardRef, useState } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Modal, Form } from './styles';
import { InputText } from '../../global-styles/Inputs';
import { Button } from '../../global-styles/Buttons';
import lightLogo from '../../assets/images/logo-light.svg';

// -------- import redux actions
import { closeModal, getToken } from '../../actions/userActions';

import createUser from '../../utils/Register';
import loginUser from '../../utils/Login';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the modal to login or sign up. It change according to the displayModal state
// if the state login is true, show the login modal.
// if the state sign is true, show the sign up modal.

export const LoginModal = forwardRef(() => {
  const displayModal = useSelector(
    (state) => state.userReducer.displayModal,
  );
  let history = useHistory();
  const dispatch = useDispatch();

  // this function close the modal
  const closeModalCard = () => dispatch(closeModal());

  // set the inputs in the form.
  const [form, setForm] = useState();
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // submit the form to the store and close the modal.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    if (displayModal.login) {
      /* Login */
      const login = await loginUser(form);
      console.log(login);
      // if (state.code === 201) {
      //   console.log(props);
      //   console.log(history);
      //   history.push('/Home/Login');
      // }
      console.log(login.data.token);
      dispatch(getToken(login.data.token));
      history.push('/home');
    } else if (displayModal.sign) {
      /* Register */
      const register = await createUser(form);
      console.log(register);
      console.log(form.email);
      // console.log(register.data.id);
      // console.log(register.data.email === form.email);
      // console.log();
      if (register.data.email === form.email) {
        dispatch(getToken(register.data.id));
        history.push('/home');
      } else {
        return <Error message={register.error} />;
      }
    }

    /* Validacion ejemplo */
    // console.log(state);
  };

  // this validate if the display Modal state is true to display it.
  if (displayModal.login || displayModal.sign) {
    return ReactDom.createPortal(
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Icon type="close" click={closeModalCard} />
          <img src={lightLogo} alt="Logo" />
          {displayModal.login && <h1>login</h1>}
          {displayModal.sign && (
            <>
              <h1>Sign up</h1>
              <InputText
                aria-label="fullname"
                type="text"
                placeholder="Name"
                name="fullname"
                onChange={handleInput}
              />
            </>
          )}
          <InputText
            aria-label="email"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleInput}
          />
          {displayModal.sign && (
            <InputText
              aria-label="username"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInput}
            />
          )}
          <InputText
            aria-label="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
          <Button type="submit" submit>
            {displayModal.login && 'Login'}
            {displayModal.sign && 'Sign up'}
          </Button>
        </Form>
      </Modal>,

      document.getElementById('modal'),
    );
  }
  return null;
});
