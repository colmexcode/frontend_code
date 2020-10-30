// ------------------------------ import libraries
import React, { useState } from 'react';

// ------------------------------ import styles and images
import {
  ProfileContainer,
  Image,
  UserName,
  Description,
  TextArea,
  UserFom,
  ImageInput,
  UserInputs,
} from './styles';
import { Button } from '../../global-styles/Buttons';
import { InputText } from '../../global-styles/Inputs';
import userIcon from '../../assets/images/userIcon.svg';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the user data section.
// user can see and edit his information

export const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('VERIFY'));
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ id: user.id });
  console.log(form);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleFiles(e) {
    setForm({
      ...form,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  }

  const userPicture = user.image ? user.image[0] : userIcon;

  return (
    <>
      <ProfileContainer>
        {/* the button allow the user to edit his data. this is the validation to show the form when user wants to edit  */}
        {editing ? (
          <UserFom action="">
            <ImageInput htmlFor="picture">
              {form.image ? (
                <img src={form.image} alt={user.username} />
              ) : (
                <img src={userIcon} alt="edit user data" />
              )}
              <input
                type="file"
                name="image"
                id="picture"
                onChange={handleFiles}
              />
            </ImageInput>
            <div>
              <UserInputs>
                <InputText
                  type="text"
                  name="userName"
                  placeholder="User Name"
                  onChange={handleChange}
                />
                <InputText
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </UserInputs>
              <TextArea
                name="description"
                cols="30"
                rows="10"
                placeholder="Tell us about you"
                onChange={handleChange}
              />
            </div>
            <Button main onClick={() => setEditing(!editing)}>
              done
            </Button>
          </UserFom>
        ) : (
          <>
            <Image src={userPicture} alt={user.username} />
            <Description>
              <UserName>
                <h1>{user.username}</h1>
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
    </>
  );
};
