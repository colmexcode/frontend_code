// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { ExperienceCard } from '../ExperienceCard';
import { useFetchData } from '../../hooks/useFetchData';
import { useSearchFetch } from '../../hooks/useSearchFetch';

// ------------------------------ import styles and images
import { Container, Layout } from './styles';

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this sections has the trendings experiences.
// it also shows the results of the experiences search.
// only shows 4 cards.

export const TrendingSection = () => {
  const data = useFetchData(
    'https://cozyplace.herokuapp.com/api/post/',
  );
  // console.log(data);

  const search = useSearchFetch('guadalajara');
  console.log(search);

  return (
    <Container>
      <h1> Trending stories </h1>
      <Layout>
        <ExperienceCard position={1} page="landing" />
        <ExperienceCard position={2} page="landing" />
        <ExperienceCard position={3} page="landing" />
        <ExperienceCard position={4} page="landing" />
      </Layout>
    </Container>
  );
};
