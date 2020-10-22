// ------------------------------ import libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ------------------------------ import components
import { Icon } from '../Icons';
import { Rate } from '../Rate';

// ------------------------------ import styles and images
import { Card, Image, Description } from './styles';
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';

// -------- import redux actions
import { hideTestimonial } from '../../actions/testimonialActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const TestimonialCard = ({ show }) => {
  const state = useSelector((state) => state.testimonialReducer.show);
  const dispatch = useDispatch();

  function hideTestimonialCard() {
    dispatch(hideTestimonial());
  }

  return (
    <Card show={state}>
      <Icon type="close" click={hideTestimonialCard} />
      <Image src={mockupPortrait} alt="" />
      <Description>
        <div>
          <h1>Fulana de tal</h1>
          <Rate />
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been he industry's
          standard dummy text ever since the 1500s
        </p>
      </Description>
    </Card>
  );
};
