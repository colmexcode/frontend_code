// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import {
  colors,
  spacing,
  border,
  shadows,
  fonts,
} from '../../global-styles/Variables';

import { media } from '../../global-styles/MediaQueries';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ExpCreationContainer = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: ${spacing.space2};

  h2 {
    font-size: ${fonts.h1};

    /* ${media.tablet} {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    } */

    ${media.mobile} {
      text-align: center;
      font-size: ${fonts.h2};
    }
  }

  ${media.mobile} {
    padding: ${spacing.space1} ${spacing.space2};
  }
`;

export const ExpForm = styled.form`
  display: grid;
  grid-template-columns: 25% 25% 50%;

  gap: 40px;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  #location,
  #title,
  #tag {
    grid-column: 1 / 3;

    ${media.tablet} {
      width: 60%;
    }
  }

  #title {
    grid-row: 1 / 2;
  }

  [name='duration'] {
    margin: 0;
    grid-column: 1 / 2;
    width: 100%;

    ${media.tablet} {
      width: 225px;
      font-size: ${fonts.normal};
    }
  }

  [name='city'] {
    margin: 0;
    grid-column: 2 / 3;
    width: 100%;

    ${media.tablet} {
      width: 225px;
      font-size: ${fonts.normal};
    }
  }

  a {
    grid-column: 2/3;
    grid-row: 7 / 8;
  }
  a + a {
    grid-column: 3 / 4;
  }

  [type='submit'] {
    grid-column: 3/4;
    width: 145px;
  }

  [name='cancel'] {
    width: 145px;
  }

  [type='text'] {

    ${media.mobile} {
      width: 230px;
      padding: ${spacing.space2};
      font-size: ${fonts.small};
    }
  }

  /* [type='button'] {
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    width: 230px;
    height: 50px;
    padding-left: 20px;
    font-size: ${fonts.h3};
    text-align: left;
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    outline: none;
    position: relative;

    ${media.mobile} {
      font-size: ${fonts.p};
    }
  } */

  /* [type='button'] ~ div {
    display: none;
    width: 230px;
    background: white;
    text-align: center;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    position: absolute;
  }

  div:hover [type='button'] ~ div {
    display: block;
  } */

  /* div:hover ${CityButton} ~ div {
    display: block;
  } */

  /* [type='button'] ~ div p:hover {
    margin: 0;
    padding: 8px 0;
    color: white;
    background-color: ${colors.titleColor};
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    cursor: pointer;
  } */

  textarea {
    grid-column: 3 / 4;
    grid-row: 5 / 7;
    width: 400px;
    height: 400px;
    padding: ${spacing.space3};
    font-family: ${fonts.family};
    font-size: ${fonts.h3};
    border: none;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.innerSoftShadow};
    outline: none;

    ${media.tablet} {
      height: 300px;
    }

    ${media.mobile} {
      width: 230px;
      height: 100px;
      padding: ${spacing.space2};
      font-size: ${fonts.p};
      overflow-y: scroll;
    }
  }

  ${media.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Rating = styled.div`
  grid-column: 1 / 2;
  grid-row: 5 / 6;
  width: 400px;
  height: 80px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.titleColor};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.outsideSoftShadow};
  z-index: -1;

  ${media.mobile} {
    padding: 0 8px;
    width: 230px;
  }

  p {
    font-family: ${fonts.family};
    font-size: ${fonts.h1};
    color: #f6f6f6;

    ${media.mobile} {
      font-size: ${fonts.p};
    }
  }
`;

export const Pics = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 5;
  width: 400px;
  height: 308px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerSoftShadow};

  ${media.mobile} {
    width: 230px;
    height: 200px;
  }
`;
// export const CancelButton = styled.button`
//   justify-self: end;
//   width: 150px;
//   height: 40px;
//   border: none;
//   font-size: ${fonts.h3};
//   background: linear-gradient(
//       136.99deg,
//       rgba(255, 255, 255, 0.4) 8.62%,
//       rgba(0, 0, 0, 0.4) 91.32%
//     ),
//     #fb8f1d;
//   background-blend-mode: soft-light, normal;
//   border-radius: ${border.borderRadiusSmall};
//   box-shadow: ${shadows.outsideSoftShadow};
//   outline: none;
// `;

// export const SubmitButton = styled.button`
//   /* justify-self:end; */
//   width: 150px;
//   height: 40px;
//   border: none;
//   font-size: ${fonts.h3};
//   background: linear-gradient(
//       136.99deg,
//       rgba(255, 255, 255, 0.4) 8.62%,
//       rgba(0, 0, 0, 0.4) 91.32%
//     ),
//     #fb8f1d;
//   background-blend-mode: soft-light, normal;
//   border-radius: ${border.borderRadiusSmall};
//   box-shadow: ${shadows.outsideSoftShadow};
//   outline: none;
// `;

// export const CityButton = styled.input.attrs({
//   type: 'button',
//   value: 'City',
// })`
//   grid-column: 1 / 2;
//   grid-row: 5 / 6;
//   width: 230px;
//   height: 50px;
//   padding-left: 20px;
//   text-align: left;
//   border: none;
//   border-radius: ${border.borderRadiusSmall};
//   box-shadow: ${shadows.outsideSoftShadow};
//   outline: none;
//   position: relative;

//   div {
//     display: none;
//     width: 230px;
//     background: white;
//     text-align: center;
//     border-radius: ${border.borderRadiusSmall};
//     box-shadow: ${shadows.outsideSoftShadow};
//     position: absolute;
//   }

//   div:hover {
//     display: block;
//   }
// `;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  div {
    display: none;
    width: 100%;
    text-align: center;
    background: white;
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    position: absolute;
    z-index: 1;
  }

  div p {
    display: block;
  }

  div p:hover {
    margin: 0;
    padding: 8px 0;
    color: white;
    background-color: ${colors.titleColor};
    border-radius: ${border.borderRadiusSmall};
    box-shadow: ${shadows.outsideSoftShadow};
    cursor: pointer;
  }
  :hover div {
    display:block;
  }
`;
