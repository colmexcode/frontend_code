// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import {
  border,
  colors,
  shadows,
  spacing,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Indicator = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: 3;
  padding: ${spacing.space1} ${spacing.space2};
  color: ${colors.backgroundColor};
  box-shadow: ${shadows.outsideShadow};
  border-radius: ${border.borderRadiusSmall};
  pointer-events: none;
  transform: translateY(-150%);
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  ${colors.mainBackgroundColor}

  ${(props) =>
    props.show === true &&
    css`
      opacity: 1;
    `}
`;
