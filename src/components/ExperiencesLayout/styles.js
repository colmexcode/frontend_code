// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const MainStyled = styled.section`

    display: grid;
    grid-template-columns: 20% 2.6% 20% 2.6% 20% 2.6% 20%;
    grid-template-rows: 15% 2.6% 15% 2.6% 15% 2.6% 15%;
    width: 80%;
    height: 1000px;
    margin: 0 auto;
    margin-top: ${spacing.space4};
    justify-content: center;

`;

