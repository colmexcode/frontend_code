// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { colors, spacing, border, shadows, fonts } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const BlockExp = styled.section`
  padding: ${spacing.space3} ${spacing.space4};
 
    h2 {
        font-size: ${fonts.h1};
    }
`;

export const DescriptionExp = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DetailsHost = styled.article`
    height: 850px;
    padding: ${spacing.space3};
    width: 55%;
    border: ${border.border};
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    overflow-y: scroll;

    h3 {
        font-size: ${fonts.h2};
        font-weight: ${fonts.normal};
    }

    p {
        margin: ${spacing.space3} 0;
    }
`
