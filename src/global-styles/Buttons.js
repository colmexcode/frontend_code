// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import { colors, spacing, shadows, border, fonts } from './Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Button = styled.button`
  padding: ${spacing.space1} ${spacing.space3};
  margin-left: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  text-transform: uppercase;
  font-weight: ${fonts.bold};
  color: ${colors.titleColor};
  box-shadow: ${shadows.outsideShadow};
  text-shadow: ${shadows.textShadow};
  cursor: pointer;
  outline: none;
  background: ${colors.secondaryBackgroundColor};

  /* this validate the color of background */
  /* if has the prop main display background orange */
  ${(props) =>
    props.main &&
    css`
      ${colors.mainBackgroundColor};
    `};
  ${(props) =>
    props.big &&
    css`
      padding: ${spacing.space2} ${spacing.space4};
      ${colors.mainBackgroundColor};
    `};
  &:active {
    box-shadow: ${shadows.innerShadow};
  }
`;
