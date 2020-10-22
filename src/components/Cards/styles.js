// ------------------------------ import libraries
import styled, { css } from 'styled-components';
// ------------------------------ import variables
import { border, shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const CardStyled = styled.div`

    display: grid;
    border: ${border.border};
    border-radius: ${border.borderRadiusBig};
    box-sizing: border-box;
    box-shadow: ${shadows.cardShadow};
    --webkit-filter: ${shadows.filter};

    ${(props) => props.position === 'home1' && css`
        grid-column: 1 / span 1;
        grid-row: 1 / span 3;
    `}
    ${(props) => props.position === 'home2' && css`
        grid-column: 3 / span 3;
        grid-row: 1 / span 1;
    `}
    ${(props) => props.position === 'home3' && css`
        grid-column: 7 / span 1;
        grid-row: 1 / span 1;
    `}
    ${(props) => props.position === 'home4' && css`
    grid-column: 1 / span 1;
        grid-row: 5 / span 1;
    `}
    ${(props) => props.position === 'home5' && css`
        grid-column: 1 / span 3;
        grid-row: 7 / span 1;
    `}
    ${(props) => props.position === 'home6' && css`
        grid-column: 3 / span 1;
        grid-row: 3 / span 3;
    `}
    ${(props) => props.position === 'home7' && css`
        grid-column: 5 / span 3;
        grid-row: 3 / span 1;
    `}
    ${(props) => props.position === 'home8' && css`
        grid-column: 5 / span 1;
        grid-row: 5 / span 1;
    `}
    ${(props) => props.position === 'home9' && css`
        grid-column: 5 / span 1;
        grid-row: 7 / span 1;
    `}
    ${(props) => props.position === 'home10' && css`
        grid-column: 7 / span 1;
        grid-row: 5 / span 3;
    `}
`;
