// ------------------------------ import libraries
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ------------------------------ import variables
import { colors, spacing, shadows, fonts } from './Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const LinkStyled = styled(Link)`
  margin: 0 ${spacing.space1};
  text-transform: uppercase;
  font-weight: ${fonts.bold};
  font-size: ${fonts.small};
  color: ${colors.titleColor};
  text-shadow: ${shadows.textShadow};
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
