// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  spacing,
  border,
  shadows,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ExpCreationContainer = styled.section`
  padding: ${spacing.space3} ${spacing.space4};
  
  h2 {
    font-size: ${fonts.h1};
  }
`;

export const ExpForm = styled.form`

  [type="text"] {
    width: 495px;
    height: 50px;
    margin-bottom: ${spacing.space3};
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.innerSoftShadow};
  }

  [type="button"] {
    width: 230px;
    height: 50px;
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
  }
`

export const Rating = styled.div`
  width: 495px;
  height: 80px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  
  p {
    font-family: ${fonts.family};
    font-size: ${fonts.h1};
    color: #f6f6f6;
  }
`

export const Map = styled.div`
  width: 496px;
  height: 375px;
  margin: 20px 0;
  background-color: gray;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
`