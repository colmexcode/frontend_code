// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import components
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import {
  ProfileContainer,
  Image,
  UserName,
  LocationReviews,
  Description,
  TextArea,
  UserFom,
  ImageInput,
  UserInputs,
} from './styles';
import { Button } from '../../global-styles/Buttons';
import { InputText } from '../../global-styles/Inputs';
import mockupPortrait from '../../assets/images/mockupPortrait.jpg';
import userIcon from '../../assets/images/userIcon.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the user data section.
// user can see and edit his information

export const UserProfile = () => {
  const [editing, setEditing] = useState(true);

  return (
    <>
      <ProfileContainer>
        {/* the button allow the user to edit his data. this is the validation to show the form when user wants to edit  */}
        {editing ? (
          <UserFom action="">
            <ImageInput htmlFor="picture">
              <img src={userIcon} alt="edit user data" />
              <input type="file" name="userPicture" id="picture" />
            </ImageInput>
            <div>
              <UserInputs>
                <InputText
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  id="userName"
                />
                <InputText
                  type="text"
                  name="location"
                  placeholder="Location"
                  id="location"
                />
              </UserInputs>
              <TextArea
                name="userDescription"
                id="userDescription"
                cols="30"
                rows="10"
                placeholder="Tell us about you"
              />
            </div>
            <Button main onClick={() => setEditing(!editing)}>
              done
            </Button>
          </UserFom>
        ) : (
          <>
            <Image src={mockupPortrait} alt="" />
            <Description>
              <UserName>
                <h1>UserName</h1>
                <Button main onClick={() => setEditing(!editing)}>
                  {editing ? 'done' : 'edit'}
                </Button>
              </UserName>
              <p>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been he
                industry's standard dummy text ever since the 1500s
              </p>
            </Description>
          </>
        )}
      </ProfileContainer>
      <LocationReviews>
        <Icon type="location" />
        <p> Location</p>
        <Icon type="star" />
        <p> Reviews</p>
      </LocationReviews>
    </>
  );
};
