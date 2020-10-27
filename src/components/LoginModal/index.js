// ------------------------------ import libraries
import React, { forwardRef, useState } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Modal, Form } from './styles';
import { InputText } from '../../global-styles/Inputs';
import { Button } from '../../global-styles/Buttons';
import lightLogo from '../../assets/images/logo-light.svg';

// -------- import redux actions
import { closeModal, getFormData } from '../../actions/userActions';

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
    dispatch(getFormData(form));

    /**Login */
    const login = await loginUser(form);
    console.log(login);

    /**Register */
    const register = await createUser(form);
    log(register);

    /**Validacion ejemplo */
    // console.log(state);
    // if (state.code === 201) {
    //   console.log(props);
    //   console.log(history);
    // history.push('/Home/Login');
    // }

    closeModalCard();
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
                aria-label="username"
                type="text"
                placeholder="Username"
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
              aria-label="password"
              type="password"
              placeholder="username"
              name="username"
              onChange={handleInput}
            />
          )}
          <InputText
            aria-label="confirmPassword"
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
