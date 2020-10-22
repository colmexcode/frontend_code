// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  fonts,
  shadows,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledIntroduction = styled.section`
  text-align: center;
  color: ${colors.titleColor};
  text-shadow: ${shadows.textShadow};
`;

export const Titule = styled.h1`
  font-size: ${fonts.bigTitle};
  margin: ${spacing.space1} 0;
`;

export const Description = styled.h3`
  width: 80%;
  margin: ${spacing.space2} auto;
  color: ${colors.titleColor};
  font-weight: ${fonts.normal};
`;