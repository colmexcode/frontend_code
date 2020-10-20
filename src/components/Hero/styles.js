// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import { shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledHero = styled.section`
  height: 500px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: ${shadows.outsideShadow};
`;

export const HeroImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;