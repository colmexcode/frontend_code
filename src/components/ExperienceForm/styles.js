// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  spacing,
  border,
  shadows,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ExpCreationContainer = styled.section`
  padding: ${spacing.space3} ${spacing.space4};
  
  h2 {
    font-size: ${fonts.h1};
  }
`;

export const ExpForm = styled.form`
  display: grid;
  grid-template-columns: 48% 48%;
  /* grid-template-rows: repeat(4, 150px) 100px 380px 50px; */

  gap: 40px;

  [type='text'] {
    width: 495px;
    height: 50px;
    padding-left: 35px;
    font-family: ${fonts.family};
    font-size: ${fonts.h3};
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.innerSoftShadow};
    outline: none;
  }

  [type='button'] {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    width: 230px;
    height: 50px;
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    outline: none;
  }

  [type='button'] ~ [type='button'] {
    justify-self: end;
  }

  textarea {
    grid-column: 2 / 3;
    grid-row: 5 / 7;
    width: 540px;
    height: 538px;
    padding: ${spacing.space3};
    font-family: ${fonts.family};
    font-size: ${fonts.h3};
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.innerSoftShadow};
    outline: none;
  }
`;

export const Rating = styled.div`
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  width: 495px;
  height: 80px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  
  p {
    font-family: ${fonts.family};
    font-size: ${fonts.h1};
    color: #f6f6f6;
  }
`

export const Map = styled.div`
  grid-column: 1 / 2;
  grid-row: 6 / 7;
  width: 496px;
  height: 375px;
  background-color: gray;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
`
export const Pics = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 5;
  width: 540px;
  height: 308px;
  display: flex;
  align-items: center;
  justify-content:space-evenly;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerSoftShadow};
`
export const CancelButton = styled.button`
  justify-self: end;
  width: 150px;
  height: 40px;
  border: none;
  font-size: ${fonts.h3};
  background: linear-gradient(
      136.99deg,
      rgba(255, 255, 255, 0.4) 8.62%,
      rgba(0, 0, 0, 0.4) 91.32%
    ),
    #fb8f1d;
  background-blend-mode: soft-light, normal;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  outline: none;
`;

export const SubmitButton = styled.button`
/* justify-self:end; */
  width: 150px;
  height: 40px;
  border: none;
  font-size: ${fonts.h3};
  background: linear-gradient(
      136.99deg,
      rgba(255, 255, 255, 0.4) 8.62%,
      rgba(0, 0, 0, 0.4) 91.32%
    ),
    #fb8f1d;
  background-blend-mode: soft-light, normal;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  outline: none;
`;