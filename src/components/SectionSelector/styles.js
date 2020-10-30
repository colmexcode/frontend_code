// ------------------------------ import libraries
import styled from 'styled-components';
import { media } from '../../global-styles/MediaQueries';

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

  ${media.mobile} {
    flex-direction: column;
    margin: 0;
    text-align: center;
  }

  h3 {
    position: relative;
    margin: 0 ${spacing.space3};
    color: ${colors.titleColor};
    font-weight: ${fonts.bold};
    cursor: pointer;
    outline: none;

    ${media.mobile} {
      margin-bottom: ${spacing.space2};
    }

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

      ${media.mobile} {
        width: 50%;
      }
    }
  }
`;
