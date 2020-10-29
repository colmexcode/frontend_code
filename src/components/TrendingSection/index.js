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
  const trending = useSelector(
    (state) => state.experiencesReducer.trending,
  );

  useEffect(() => {
    dispatch(setTrending());
  }, []);

  return (
    <Container tabIndex="0" ref={ref}>
      <h1> Trending stories </h1>
      <Layout>
        {trending.map((experience, i = 0) => {
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
