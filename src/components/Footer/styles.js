// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  shadows,
  border,
  fonts,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledFooter = styled.footer`
  margin-top: ${spacing.space4};
  padding: ${spacing.space3};
  border-radius: ${border.borderRadiusBig};
  text-align: center;
  box-shadow: ${shadows.innerShadow};
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${spacing.space2};
  justify-content: space-between;
`;

export const Rights = styled.div`
  width: 40%;
  text-align: left;

  img {
    width: ${spacing.space4};
  }
`;

export const ListsGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  li {
    margin-bottom: ${spacing.space1};
  }

  li:first-child {
    margin-bottom: ${spacing.space3};
    color: transparent;
    text-transform: uppercase;
    font-weight: ${fonts.bold};
    ${colors.mainBackgroundColor};
    -webkit-background-clip: text;
  }
`;
