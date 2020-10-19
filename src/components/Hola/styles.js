// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  shadows,
  border,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
// This component is an example. It has to be deleted.

export const Greeting = styled.p`
  font-size: 50px;
  color: ${colors.titleColor};
  background: ${colors.secondaryBackgroundColor};
`;

export const MainButton = styled.button`
  padding: ${spacing.space2};
  border-radius: ${border.borderRadiusSmall};
  font-size: ${spacing.space1};
  color: ${colors.titleColor};
  border: ${border.border};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};
`;
