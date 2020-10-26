// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//

export const ExperienceGrid = styled.div`
  margin: ${spacing.space3} auto;
  display: grid;
  max-width: 800px;
  grid-template-columns: repeat(3, 1fr);
  gap: ${spacing.space3};
`;
