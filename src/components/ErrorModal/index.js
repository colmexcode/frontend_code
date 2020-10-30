// ------------------------------ import libraries
import React, { forwardRef, useRef } from 'react';
import ReactDom from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// ------------------------------ import components
import { Icon } from '../Icons';
import { LoginModal } from '../LoginModal'

// ------------------------------ import styles and images
import { Modal, Form } from './styles';
import { Button } from '../../global-styles/Buttons';
import lightLogo from '../../assets/images/logo-light.svg';
import error from '../../assets/images/Error-logo.svg'

// -------- import redux actions
import { closeModal, openLogin } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the modal to retry the login . It change according to the displayModal state
// if the state error is true, show the error modal.
// if the state login is true, show the login modal.

export const ErrorModal = forwardRef(() => {

  const modalRef = useRef()

  const displayModal = useSelector(
    (state) => state.userReducer.displayModal,
  );
  
  const dispatch = useDispatch();

  // this function close the modal
  const closeModalCard = () => dispatch(closeModal());
  
  // this function open the modal
  const toLoginAgain = () => dispatch(openLogin())

  const handleSubmit = async (e) => {
    e.preventDefault();

    toLoginAgain()
    
  };

  // this validate if the display Modal state is true to display it.
  if (displayModal.error) {
    return ReactDom.createPortal(
      <Modal>
        <Form onSubmit={handleSubmit}>
          <Icon type="close" click={closeModalCard} />
          <img src={lightLogo} alt="Logo" />
          <img src={error} alt="ErrorLogin" />
          <p>E-mail or password incorrect</p>
          <Button type="submit" submit>
            Retry
          </Button>
        </Form>
      </Modal>,

      document.getElementById('modal'),
    );
  } else if(displayModal.login) {
    <LoginModal ref={modalRef} />
  }
  return null;
});
