// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  border,
  shadows,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Container = styled.section`
  padding: ${spacing.space3} ${spacing.space4};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.innerShadow};
  ${colors.mainBackgroundColor};

  h1 {
    margin: 0;
    margin-bottom: ${spacing.space2};
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
  }
`;

export const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: ${spacing.space2};
`;
