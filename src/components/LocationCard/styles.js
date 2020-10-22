// ------------------------------ import libraries
import styled, { css } from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  border,
  shadows,
  spacing,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  position: absolute;
  display: none;
  left: ${(props) => props.left || '0px'};
  top: ${(props) => props.top || '0px'};
  z-index: 2;
  width: 200px;
  height: 350px;
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  overflow: hidden;

  ${(props) =>
    props.show === true &&
    css`
      display: block;
    `}

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  position: absolute;
  min-width: 60%;
  max-width: 100%;
  z-index: 1;
  bottom: 0;
  padding-left: ${spacing.space2};
  padding-bottom: ${spacing.space1};
  border-radius: 0 ${border.borderRadiusSmall} 0 0;
  background-color: ${colors.backgroundColor};

  p {
    margin: ${spacing.space1} 0 0 0;
    font-weight: ${fonts.bold};
    color: ${colors.titleColor};
  }
`;
