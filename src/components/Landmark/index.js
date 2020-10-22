// ------------------------------ import libraries
import React from 'react';
import { useDispatch } from 'react-redux';

// ------------------------------ import styles and images
import { LandmarkIcon } from './styles';
import landmarkIcon from '../../assets/images/mapLandmark.svg';

// -------- import redux actions
import { showLocation, hideLocation } from '../../actions/mapActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the landmark icon of the landing page map

export const Landmark = ({ left, top }) => {
  const dispatch = useDispatch();

  function showLocationCard(e) {
    dispatch(showLocation());
  }
  function hideLocationCard(e) {
    dispatch(hideLocation());
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
