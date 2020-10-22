// ------------------------------ import libraries
import styled from 'styled-components';

export const LandmarkIcon = styled.img`
  width: 40px;
  position: absolute;
  z-index: 1;
  left: ${(props) => props.left || '10%'};
  top: ${(props) => props.top || '10%'};
`;
