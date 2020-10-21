// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { colors, fonts, shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const Title = styled.h1`
  height: 70px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 92px;
  font-weight: ${fonts.normal};
  font-size: 60px;
  line-height: 70px;
  text-align: center;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
  color: ${colors.titleColor};
`;

export const DescriptText = styled.p`
  width: 447px;
  height: 57px;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 242px;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

export const SpecialSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 870px;
  height: 200px;
  margin: 0 auto;
  position: absolute;
  top: 462px;
  left: 0;
  right: 0;
`;

export const Category = styled.button`
  width: 253px;
  height: 48px;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: ${colors.titleColor};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  background: ${colors.secondaryBackgroundColor};
  box-shadow: ${shadows.outsideShadow};
  border-radius: 10px;
  border: none;
  &.particular{
    align-self: flex-end;
  }
`;

export const TextChoice = styled.p`
  width: 646px;
  height: 57px;
  margin: 0 auto;
  position: absolute;
  left: 163px;
  top: 850px;
  font-weight: ${fonts.normal};
  font-size: 28px;
  text-align: center;
`;

export const ButtonAction = styled.button`
  width: 150px;
  height: 40px;
  position: absolute;
  left: 1028px;
  top: 850px;
  font-size: 26px;
  line-height: 30px;
  ${colors.mainBackgroundColor};
  box-shadow: ${shadows.outsideShadow};
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  color: #f7f7f7;
  border: none;
  border-radius: 10px;
`;
