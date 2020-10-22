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
  const [form, setForm] = useState({});
  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  // submit the form to the store and close the modal.
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getFormData(form));
    closeModalCard();
  }

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
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleInput}
              />
            </>
          )}
          <InputText
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleInput}
          />
          <InputText
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
          {displayModal.sign && (
            <InputText
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleInput}
            />
          )}
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
