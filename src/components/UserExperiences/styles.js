// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { spacing } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ExperienceSelector = styled.section`
  margin: ${spacing.space3} auto;
  max-width: 1024px;
  align-items: center;
  transform: translateY(-10%);
`;

export const Selector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

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

export const ExperienceGrid = styled.div`
  margin: ${spacing.space3} auto;
  display: grid;
  max-width: 1024px;
  /* mawidth: minmax(auto, 1024px); */
  grid-template-columns: 3fr 3fr 3fr;
  grid-template-areas:
    'img userName userName'
    'img description description'
    '. locationReviews locationReviews';
  gap: 10px;
  align-items: center;
`;

// export const MapImg = styled.img`
//   width: 1500px;
//   display: block;
//   margin: 0 auto;
// `;
