// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';
import { media } from '../../global-styles/MediaQueries';


// ------------------------------------ COMPONENTS ------------------------------------//
export const MainStyled = styled.section`

    display: grid;
    grid-template-columns: 22% 1.8% 23.5% 1.8% 23.5% 1.8% 23.5%;
    grid-template-rows: 23.1% 2.6% 23.1% 2.6% 23.1% 2.6% 23.1%;
    width: 70%;
    height: 700px;
    margin: 0 auto;
    margin-top: ${spacing.space4};

    ${media.mobile} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-row-gap: 10px;
    height: 3100px;
    }

    ${media.tablet} {
    display:grid;
    grid-template-columns: 50% 2% 48%;
    grid-template-rows: repeat(10, 1fr);
    grid-row-gap: 5px;
    height: 1500px;

  }
`;

