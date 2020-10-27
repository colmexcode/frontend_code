// ------------------------------ import libraries
import styled, { css } from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  border,
  spacing,
  shadows,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Card = styled.section`
  width: 350px;
  height: 133px;
  /* position: relative; */
  /* left: 50%; */
  display: flex;
  align-items: center;
  /* transform: translateX(-50%); */
  padding: ${spacing.space3} ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusBig};
  box-shadow: ${shadows.outsideShadow};
  ${colors.mainBackgroundColor};
  /* opacity: 0; */
  pointer-events: none;

  /* ${(props) =>
    props.show === true &&
    css`
      opacity: 1;
      pointer-events: all;
    `} */
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};
`;

export const HostName = styled.div`
  height: 100%;
  display: flex;
  padding: 0 0 ${spacing.space2} ${spacing.space3};
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin: 0;
    font-size: 28px;
    font-weight: 200;
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${spacing.space2} 0 ${spacing.space2} ${spacing.space3};
  color: ${colors.backgroundColor};

  h1 {
    margin: 0 0 5px 0;
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
  }
`;
