// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  border,
  spacing,
  shadows,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  width: 350px;
  height: 225px;
  padding: 25px 50px;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 50px 50px 35px;
  gap: 20px;
  font-size: ${fonts.h2};
  font-weight: 200;
  color: ${colors.backgroundColor};
  text-shadow: ${shadows.textShadow};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};
  pointer-events: none;

  p {
      justify-self: end;
      align-self: center;
  }
`;

export const Button = styled.button`
    width: 250px;
    height: 35px;
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideShadow};
`