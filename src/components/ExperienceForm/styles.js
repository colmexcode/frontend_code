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

import { media } from '../../global-styles/MediaQueries';


// ------------------------------------ COMPONENTS ------------------------------------//
export const ExpCreationContainer = styled.section`
  padding: ${spacing.space3} ${spacing.space4};
  
  h2 {
    font-size: ${fonts.h1};

    ${media.mobile} {
      text-align:center;
      font-size: ${fonts.h2};
    }

  }

  ${media.mobile} {
    padding: ${spacing.space1} ${spacing.space2};
  }

`;

export const ExpForm = styled.form`
  display: grid;
  grid-template-columns: 48% 48%;

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

    ${media.mobile} {
      width: 230px;
      padding: ${spacing.space2};
      font-size: ${fonts.small};
    }
  }

  [type='button'] {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    width: 230px;
    height: 50px;
    padding-left: 20px;
    font-size: ${fonts.h3};
    text-align: left;
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    outline: none;
    position: relative;

    ${media.mobile} {
      font-size: ${fonts.p};
    }
  }

  [type='button'] ~ div {
    display: none;
    width: 230px;
    background: white;
    text-align: center;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    position: absolute;
  }

  div:hover [type='button'] ~ div {
    display: block;
  }

  /* div:hover ${CityButton} ~ div {
    display: block;
  } */

  [type='button'] ~ div p:hover {
    margin: 0;
    padding: 8px 0;
    color: white;
    background-color: ${colors.titleColor};
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    cursor: pointer;
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

    ${media.tablet} {
      height: 300px;
    }

    ${media.mobile} {
      width: 230px;
      height: 100px;
      padding: ${spacing.space2};
      font-size: ${fonts.p};
      overflow-y: scroll;
    }
  }

  ${media.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Rating = styled.div`
  grid-column: 1 / 2;
  grid-row: 6 / 7;
  width: 495px;
  height: 80px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  z-index: -1;

  ${media.mobile} {
    padding: 0 8px;
    width: 230px;
  }
  
  p {
    font-family: ${fonts.family};
    font-size: ${fonts.h1};
    color: #f6f6f6;

    ${media.mobile} {
      font-size: ${fonts.p};
    }
  }
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

  ${media.mobile} {
    width: 230px;
    height:200px;
  }
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

export const CityButton = styled.input.attrs({
  type: 'button',
  value: 'City',
})`
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  width: 230px;
  height: 50px;
  padding-left: 20px;
  text-align: left;
  border: none;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  outline: none;
  position: relative;

  div {
    display: none;
    width: 230px;
    background: white;
    text-align: center;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    position: absolute;
  }

  div:hover {
    display: block;
  }
`;