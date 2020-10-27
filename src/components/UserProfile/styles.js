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
export const ProfileContainer = styled.section`
  background-color: transparent;
  color: ${colors.textColor};
  /* padding: 32px 15px; */
  display: grid;
  grid-template-columns: minmax(auto, 1024px);
  justify-content: center;

  position: relative;
  /* left: 50%; */
  align-items: center;
  /* transform: translateY(-50%); */
  padding: ${spacing.space3} ${spacing.space2};
  /* border: ${border.border}; */
  border-radius: ${border.borderRadiusBig};
  /* box-shadow: ${shadows.outsideShadow}; */
  /* ${colors.mainBackgroundColor}; */
  /* opacity: 0; */
  pointer-events: none;

  ${(props) =>
    props.show === true &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 3fr;
  grid-template-areas:
    'img userName userName'
    'img description description'
    '. locationReviews locationReviews';
  gap: 10px;
`;

export const Image = styled.img`
  grid-area: img;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};
`;

export const UserName = styled.div`
  grid-area: userName;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  color: ${colors.backgroundColor};


  h1 {
    margin: 0 0 5px 0;
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
    color: ${colors.titleColor};
  }
  Button {
    ${colors.mainBackgroundColor};
  }
`;

export const LocationReviews = styled.div`
  grid-area: locationReviews;
  display: flex;
  justify-content: space-evenly;
  color: ${colors.backgroundColor};
  margin: 0 20px;

  h1 {
    margin: 0 0 5px 0;
    color: ${colors.backgroundColor};
    text-shadow: ${shadows.textShadow};
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  li {
    display: flex;
    width: 20%;
    justify-content: center;
    list-style: none;
    margin: 0 2.5em;
    border-bottom: 1px solid black;
  }
`;

export const Description = styled.p`
  grid-area: description;
  height: 100%;
  display: flex;
  margin: 20px;
  /* flex-direction: column; */
  /* justify-content: space-between; */
  /* padding: ${spacing.space2} 0 ${spacing.space2} ${spacing.space3}; */
`;
