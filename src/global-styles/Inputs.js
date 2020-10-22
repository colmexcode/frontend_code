// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { shadows, spacing, border } from './Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const InputText = styled.input`
  height: 40px;
  margin: ${spacing.space1} 0;
  padding-left: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerShadow};
  outline: none;

  &:focus {
    box-shadow: ${shadows.innerSoftShadow};
  }
`;
