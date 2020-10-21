// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components

// ------------------------------ import styles and images
import {
  Title,
  DescriptText,
  Category,
  TextChoice,
  ButtonAction,
  SpecialSection,
} from './styles';

// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// description of the component.
export const InterestForm = () => {
  return (
    <>
      <section>
        <Title>WHAT ARE YOU UP TO?</Title>
        <DescriptText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquid, veritatis maxime sed blanditiis ab, similique
          magnam aperiam vero eius et dolores quidem velit voluptas
          cupiditate.
        </DescriptText>
      </section>
      <SpecialSection>
        <Category>Adventure Travel</Category>
        <Category>Art And Culture</Category>
        <Category>Wildlife And Nature</Category>
        <Category className="particular">Family Holidays</Category>
        <Category className="particular">Food And Drink</Category>
      </SpecialSection>
      <section>
        <TextChoice>
          Awesome Choice: category1, category2, category3
        </TextChoice>
        <ButtonAction>GO</ButtonAction>
      </section>
    </>
  );
};
