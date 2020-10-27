// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const MainStyled = styled.section`

    display: grid;
    grid-template-columns: 22% 2.6% 23.5% 2.6% 23.5% 2.6% 23.5%;
    grid-template-rows: 23.1% 2.6% 23.1% 2.6% 23.1% 2.6% 23.1%;
    width: 80%;
    height: 700px;
    margin: 0 auto;
    margin-top: ${spacing.space4};

`;

