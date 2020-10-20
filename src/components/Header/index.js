// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import { StyledHeader, Brand, Logo } from './styles';
import { Button } from '../../global-styles/Buttons';
import { LinkStyled as Link } from '../../global-styles/Links';
import logo from '../../assets/images/logo.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// This is the header.
export const Header = () => {
  return (
    <StyledHeader>
      <Brand>
        <Logo src={logo} alt="Cozy place logo" />
        <Link to="/">about us</Link>
        <Link to="/">destinations</Link>
      </Brand>
      <div>
        <Button type="button">login</Button>
        <Button main type="button">
          register
        </Button>
      </div>
    </StyledHeader>
  );
};
