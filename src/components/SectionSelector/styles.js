// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  fonts,
  shadows,
  spacing,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//

export const Selector = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.space3};

  h3 {
    position: relative;
    margin: 0 ${spacing.space3};
    color: ${colors.titleColor};
    font-weight: ${fonts.bold};
    cursor: pointer;
    outline: none;

    &:hover {
      text-shadow: ${shadows.textShadow};
    }

    &:focus {
      text-shadow: ${shadows.textShadow};
    }

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -5px;
      width: 120%;
      height: 1px;
      transform: translateX(-50%);
      background: ${colors.titleColor};
    }
  }
`;
