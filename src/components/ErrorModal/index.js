// ------------------------------ import libraries
import React, { forwardRef, useRef } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { Modal, Container } from './styles';
import { Button } from '../../global-styles/Buttons';
import errorImg from '../../assets/images/Error-logo.svg';

// -------- import redux actions
import { closeModal } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the modal to retry the login . It change according to the displayModal state
// if the state error is true, show the error modal.
// if the state login is true, show the login modal.

export const ErrorModal = () => {
  const dispatch = useDispatch();
  const { error } = useSelector(
    (state) => state.userReducer.displayModal,
  );

  const closeModalCard = () => dispatch(closeModal());

  if (displayModal.error) {
    return ReactDom.createPortal(
      <Modal>
        <Container onSubmit={handleSubmit}>
          <Icon type="close" click={closeModalCard} />
          <img src={errorImg} alt="ErrorLogin" />
          <p>{error}</p>
          <Button submit>try again</Button>
        </Container>
      </Modal>,

      document.getElementById('alert'),
    );
  }
  return null;
};
