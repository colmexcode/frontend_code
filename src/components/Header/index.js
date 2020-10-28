// ------------------------------ import libraries
import React from 'react';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import { StyledHeader, Brand, Logo, LinkedLogo } from './styles';
import { Button } from '../../global-styles/Buttons';
import { LinkStyled as Link } from '../../global-styles/Links';
import logo from '../../assets/images/logo.svg';

// -------- import redux actions
import { openLogin, openSign } from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// This is the header. It change if the user is logged.
// In the landing page it shows the login and sign up buttons.
// When the user is logged it shows the user picture and a link to home page.

export const Header = () => {
  const dispatch = useDispatch();

  // this functions open the modal
  const openLoginModal = () => dispatch(openLogin());
  const openSignModal = () => dispatch(openSign());

  return (
    <StyledHeader>
      <Brand>
        <LinkedLogo to="/">
          <Logo src={logo} alt="Cozy place logo" />
        </LinkedLogo>
        <Link nav="true" to="/">
          about us
        </Link>
        <Link nav="true" to="/">
          destinations
        </Link>
      </Brand>
      <div>
        <Button onClick={openLoginModal}>login</Button>
        {window.innerWidth <= 320 ? null : (
          <Button main onClick={openSignModal}>
            Sign up
          </Button>
        )}
      </div>
    </StyledHeader>
  );
};
