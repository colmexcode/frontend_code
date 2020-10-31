// ------------------------------ import libraries
import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';

// ------------------------------ import styles and images
import { Container, Layout } from './styles';

// -------- import redux actions
import { setTrending } from '../../actions/experiencesActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this sections has the trendings experiences.
// it also shows the results of the experiences search.
// only shows 4 cards.

export const TrendingSection = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const searchExperiences = useSelector(
    (state) => state.experiencesReducer.searchExperiences,
  );

  useEffect(() => {
    dispatch(setTrending());
  }, []);

  return (
    <Container tabIndex="0" ref={ref}>
      <h1> Trending stories </h1>
      <Layout>
        {searchExperiences.slice(0, 4).map((experience, i = 0) => {
          i++;
          return (
            <ExperienceCard
              position={i}
              page="landing"
              key={experience._id}
              {...experience}
            />
          );
        })}
      </Layout>
    </Container>
  );
});
