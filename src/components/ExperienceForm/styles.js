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

import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ExpCreationContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainInputs = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  input {
    font-size: ${fonts.h3};
    width: 100%;
    align-self: flex-start;
  }
`;

export const ExpForm = styled.form`
  textarea {
    width: 100%;
    height: 300px;
    margin-top: ${spacing.space2};
    padding: ${spacing.space2};
    font-family: ${fonts.family};
    font-size: ${fonts.p};
    border: ${border.border};
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.innerSoftShadow};
    outline: none;
  }
`;

export const Rating = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-end;
  padding: 0 ${spacing.space2};
  background-color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};

  p {
    font-size: ${fonts.h2};
    color: ${colors.backgroundColor};
    margin-right: ${spacing.space2};
  }
`;

export const Pics = styled.div`
  display: grid;
  place-items: center;
  width: 400px;
  height: 300px;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerSoftShadow};
  overflow: hidden;

  img[pic] {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    display: none;
  }
`;

export const Dropdown = styled.select`
  width: 30%;
  padding: ${spacing.space1};
  padding-left: ${spacing.space1};
  font-size: ${fonts.p};
  border-radius: ${border.borderRadiusSmall};
  border: ${border.border};
  box-shadow: ${shadows.outsideShadow};
  background: ${colors.secondaryBackgroundColor};
  outline: none;
  transition: box-shadow 0.3s;

  &:focus {
    font-weight: ${fonts.bold};
    box-shadow: ${shadows.innerShadow};
  }

  option {
    background: ${colors.backgroundColor};
  }
`;

export const SubmitButtons = styled.div`
  text-align: center;
  margin-top: ${spacing.space2};
`;
