// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { StyledHeader, Brand, Logo } from './styles';
import { Button } from '../../global-styles/Buttons';
import { LinkStyled as Link } from '../../global-styles/Links';
import logo from '../../assets/images/logo.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// This is the header. It change if the user is logged.
// In the landing page it shows the login and sign up buttons.
// When the user is logged it shows the user picture and a link to home page.

export const UserHeader = () => {
  return (
    <StyledHeader>
      <Brand>
        <Logo src={logo} alt="Cozy place logo" />
        <Link to="/">about us</Link>
        {/* <Link to="/">destinations</Link> */}
      </Brand>
      <div>
        <Link to="/">Home</Link>
        {/* <Button main type="button">
          Sign up
        </Button> */}
      </div>
    </StyledHeader>
  );
};
