// ------------------------------ import libraries
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// ------------------------------ import components
import { Hero } from '../../components/Hero';
import { ExperienceHost } from '../../components/ExperienceHost';
import { Footer } from '../../components/Footer';

// -------- import redux actions
import { setCurrentExperience } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const current = useSelector(
  //   (state) => state.experiencesReducer.current,
  // );

  useLayoutEffect(() => {
    dispatch(setCurrentExperience(id));
  }, []);

  return (
    <>
      <Hero />
      <ExperienceHost />
      <Footer />
    </>
  );
};
