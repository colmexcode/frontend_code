// ------------------------------ import libraries
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ------------------------------ import variables
import {
  border,
  shadows,
  spacing,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const CardStyled = styled.section`
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  outline: none;

  h3 {
    margin-bottom: ${spacing.space3};
  }
`;
