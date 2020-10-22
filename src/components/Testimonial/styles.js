// ------------------------------ import libraries
import styled from 'styled-components';
// ------------------------------ import variables
import { shadows } from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const StyledTestimonial = styled.section`
  position: absolute;
  cursor: pointer;
  left: ${(props) => props.left || 0};
  top: ${(props) => props.top || '50px'};

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: ${shadows.outsideShadow};
    object-fit: cover;
  }
`;
