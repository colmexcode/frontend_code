// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { colors, spacing, fonts, shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Title = styled.h1`
  position: absolute;
  height: 70px;
  left: 0;
  right: 0;
  top: 92px;
  margin: 0 auto;
  font-weight: ${fonts.normal};
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  color: ${colors.titleColor};
  /* text-shadow: ${shadows.outsideShadow}; */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
`

export const DescriptText = styled.p`
  position: absolute;
  width: 447px;
  height: 57px;
  left: 0;
  right: 0;
  top: 242px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export const Category = styled.button`
  width: 253px;
  height: 48px;
  border-radius: 10px;
  background: ${colors.secondaryBackgroundColor};
  box-shadow: ${shadows.outsideShadow};
  font-size: 26px;
  line-height: 30px;
  color: ${colors.titleColor};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`

export const TextChoice = styled.p`
  position: absolute;
  width: 646px;
  height: 57px;
  left: 163px;
  top: 850px;
  margin: 0 auto;
  font-weight: ${fonts.normal};
  font-size: 28px;
  text-align: center;
`;

export const ButtonAction = styled.button`
  position: absolute;
  width: 150px;
  height: 40px;
  left: 1028px;
  top: 850px;
  border-radius: 10px;
  ${colors.mainBackgroundColor};
  box-shadow: ${shadows.outsideShadow};
  font-size: 26px;
  line-height: 30px;
  color: #f7f7f7;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
`
