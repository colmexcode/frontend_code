// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';
import { Rate } from '../Rate';

// ------------------------------ import styles and images
import {
  ProfileContainer,
  ProfileGrid,
  Image,
  Description,
  UserName,
  LocationReviews,
} from './styles';
import { Button } from '../../global-styles/Buttons';
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';
import starIcon from '../../assets/images/Star.svg';
import landmarkIcon from '../../assets/images/mapLandmark.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// this card show an user testimonial and the rating of the app
// It is hidden and is shown when the user click the testimonial component.

export const UserProfile = ({ show, handleClick }) => {
  return (
    <ProfileContainer show={show}>
      <ProfileGrid>
        {/* <Icon type="close" click={handleClick} /> */}
        <Image src={mockupPortrait} alt="" />
        {/* <Description> */}
        <UserName>
          <h1>UserName</h1>
          {/* <Rate /> */}
          <Button>Edit</Button>
        </UserName>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been he industry's
          standard dummy text ever since the 1500s
        </Description>
        <LocationReviews>
          <ul>
            <li>
              <div>
                <img src={landmarkIcon} alt="" />
                <span>Location</span>
              </div>
            </li>
            <li>
              <div>
                <img src={starIcon} alt="" />
                <span>205 Reviews</span>
              </div>
            </li>
          </ul>
        </LocationReviews>
        {/* </Description> */}
      </ProfileGrid>
    </ProfileContainer>
  );
};
