// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';
import { Rate } from '../Rate';
// ------------------------------ import styles and images
import { Card, Image } from './styles';
import pic from '../../assets/images/mockupPortrait.jpg';
// -------- import redux actions

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const ReviewCard = () => {
  return (
    <Card>
      <article>
        <Image src={pic} alt="Image Review" />
        <h3>Name LastName</h3>
        <div>
          <Rate />
        </div>
      </article>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Quod, iusto? Veritatis iste sed tempore, asperiores est illo
      </p>
    </Card>
  );
};
