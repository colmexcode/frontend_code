// ------------------------------ import libraries
import React from 'react';
import { useSelector } from 'react-redux';
// ------------------------------ import components
// import { ImportedComponent } from '../components/ImportedComponent ';

// ------------------------------ import styles and images
import { Indicator } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const ResulIndicator = () => {
  const { showIndicator, mouseCoordinates } = useSelector(
    (state) => state.experiencesReducer,
  );

  return (
    <Indicator
      show={showIndicator.status}
      left={`${mouseCoordinates.x}px`}
      top={`${mouseCoordinates.y}px`}
    >
      <div> {showIndicator.message} </div>
    </Indicator>
  );
};
