// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  shadows,
  fonts,
  border,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.article`
  width: 350px;
  height: 185px;
  padding: 20px 25px;
  border: none;
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideSoftShadow};
  overflow: hidden;

  h3 {
    margin: 0;
    font-size: ${fonts.h2};
    align-self: flex-start;
    justify-self: center;
    position: relative;
  }

  h3::after {
    content: '';
    background-color: #fb8f1d;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
  }

  article {
    display: grid;
    grid-template-columns: 65px 1fr;
    grid-template-rows: 33px 33px;
  }

  div {
    grid-column: 2 / span 1;
    justify-self: center;
    display: flex;
  }
`;
export const Image = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
  box-shadow: ${shadows.outsideShadow};
`;
