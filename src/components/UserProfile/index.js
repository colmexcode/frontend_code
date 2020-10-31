// ------------------------------ import libraries
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import { UpdateUser } from '../../utils/UpdateUser';

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

// ------------------import redux actions
import {
  updateUserState,
  getUserData,
} from '../../actions/userActions';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the user data section.
// user can see and edit his information

export const UserProfile = () => {
  const dispatch = useDispatch();
  const {
    token,
    _id,
    username,
    description = 'tell us about you',
    image = userIcon,
    favorite,
  } = useSelector((state) => state.userReducer.userData);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ _id });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleFiles(e) {
    setForm({
      ...form,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await UpdateUser(form, token, _id);
    setEditing(false);
  }

  return (
    <>
      <ProfileContainer>
        {/* the button allow the user to edit his data. this is the validation to show the form when user wants to edit  */}
        {editing ? (
          <UserFom onSubmit={handleSubmit}>
            <ImageInput htmlFor="picture">
              {form.image ? (
                <img src={form.image} alt={username} />
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
                  name="username"
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
            <Button type="submit" main>
              done
            </Button>
          </UserFom>
        ) : (
          <>
            <Image src={image} alt={username} />
            <Description>
              <UserName>
                <h1>{username}</h1>
                <Button main onClick={() => setEditing(!editing)}>
                  edit
                </Button>
              </UserName>
              <p>{description}</p>
            </Description>
          </>
        )}
      </ProfileContainer>
    </>
  );
};
