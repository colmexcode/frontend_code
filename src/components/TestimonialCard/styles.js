// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  border,
  spacing,
  shadows,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  width: 620px;
  height: 300px;
  position: relative;
  left: 50%;
  display: flex;
  align-items: center;
  transform: translateX(-50%);
  padding: ${spacing.space3} ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing.space2} 0 ${spacing.space2} ${spacing.space3};
  color: ${colors.backgroundColor};

  h1 {
    margin: 0;
    text-shadow: ${shadows.textShadow};
  }
`;
