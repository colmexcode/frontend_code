// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  border,
  shadows,
  spacing,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Modal = styled.section`
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const Form = styled.form`
  position: relative;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: ${spacing.space3};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};

  h1 {
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
    text-align: center;
    text-transform: uppercase;
  }
`;
