// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import { LandmarkIcon } from './styles';
import landmarkIcon from '../../assets/images/mapLandmark.svg';
import { useGetMousePosition } from '../../hooks/useGetMousePosition';

// -------- import redux actions
import {
  showLocation,
  hideLocation,
  setMouseCoordinates,
} from '../../actions/mapActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landmark icon of the landing page map

export const Landmark = ({ left, top }) => {
  const dispatch = useDispatch();
  const mousePosition = useGetMousePosition();

  // this functions show the location card and the coordinatess
  function showLocationCard() {
    dispatch(showLocation());
    dispatch(setMouseCoordinates(mousePosition));
  }
  function hideLocationCard() {
    dispatch(hideLocation());
    dispatch(setMouseCoordinates({ x: 0, y: 0 }));
  }

  return (
    <LandmarkIcon
      onMouseEnter={showLocationCard}
      onMouseOut={hideLocationCard}
      src={landmarkIcon}
      left={`${left}px`}
      top={`${top}px`}
      alt="landmark icon"
    />
  );
};
