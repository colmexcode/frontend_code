// ------------------------------ import libraries
import styled, { css } from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  shadows,
  border,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledIcon = styled.img`
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 50%;
  border: ${border.border};
  box-shadow: ${shadows.outsideShadow};
  background: ${colors.secondaryBackgroundColor};

  /* this lines validate if type is search to display a diferente background an size */
  ${(props) =>
    props.alt === 'search' &&
    css`
      width: 60px;
      height: 60px;
      position: absolute;
      right: 0;
      padding: 15px;
      ${colors.mainBackgroundColor};
    `};

  /* this rule is the style to the click action  */
  &:active {
    box-shadow: ${shadows.innerShadow};
  }
`;
