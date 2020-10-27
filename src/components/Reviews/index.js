// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';
import { SearchReview } from '../SearchReview';
import { ReviewCard } from '../ReviewCard';
// ------------------------------ import styles and images
import { ReviewContainer } from './styles';
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const Reviews = () => {
  return (
    <div>
      <SearchReview />
      <ReviewContainer>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ReviewContainer>
    </div>
  );
};
