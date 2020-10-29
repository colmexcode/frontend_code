// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import components
import { Button } from '../../global-styles/Buttons';

// ------------------------------ import styles and images
import {
  Container,
  Title,
  DescriptText,
  CategorySection,
  SelectionSection,
  TextChoice,
} from './styles';

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export default () => {
  const [categories, setCategories] = useState([]);
  return (
    <Container>
      <Title>WHAT ARE YOU UP TO?</Title>
      <DescriptText>
        For decades travellers have reached for Lonely Planet books
        when looking to plan and execute their perfect trip, but now,
        they can also let Lonely Planet Experiences lead the way.
      </DescriptText>
      <CategorySection>
        <Button
          name="Adventure Travel"
          onClick={(e) => setCategories(categories + e.target.name)}
        >
          Adventure Travel
        </Button>
        <Button
          name="Art And Culture"
          onClick={(e) => setCategories(categories + e.target.name)}
        >
          Art And Culture
        </Button>
        <Button
          name="Wildlife And Nature"
          onClick={(e) => setCategories(categories + e.target.name)}
        >
          Wildlife And Nature
        </Button>
        <Button
          name="Family Holidays"
          onClick={(e) => setCategories(categories + e.target.name)}
        >
          Family Holidays
        </Button>
        <Button
          name="Food And Drink"
          onClick={(e) => setCategories(categories + e.target.name)}
        >
          Food And Drink
        </Button>
      </CategorySection>
      <SelectionSection>
        <TextChoice>
          Awesome Choice:
          {categories}
        </TextChoice>
        <Button main>GO</Button>
      </SelectionSection>
    </Container>
  );
};
