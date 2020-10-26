// ------------------------------ import libraries
import styled from 'styled-components';

// ------------------------------ import variables
import {
  colors,
  spacing,
  shadows,
  fonts,
  border,
} from '../../global-styles/Variables';

// ------------------------------------ COMPONENTS ------------------------------------//
export const ProfileContainer = styled.section`
  max-width: 1024px;
  transform: translateY(-50%);
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: ${shadows.outsideShadow};
`;

export const Description = styled.div`
  margin-left: ${spacing.space3};

  p {
    margin: 0;
    margin-top: ${spacing.space3};
  }
`;

export const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.backgroundColor};

  h1 {
    font-size: ${fonts.bigTitle};
    margin: 0;
    text-shadow: ${shadows.textShadow};
  }

  /* input {
    height: 80px;
  } */
`;

export const LocationReviews = styled.div`
  position: relative;
  transform: translateY(-100%);
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p {
    margin: 0;
  }
`;

export const UserFom = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    position: relative;
    width: 80%;
  }

  button {
    position: absolute;
    right: 0;
    top: 15%;
  }
`;

export const UserInputs = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    margin-right: ${spacing.space2};
    flex-grow: 1;
  }
`;

export const TextArea = styled.textarea`
  height: 60px;
  width: 100%;
  margin-top: ${spacing.space3};
  padding: ${spacing.space2};
  border: ${border.border};
  border-radius: ${border.borderRadiusSmall};
  box-shadow: ${shadows.innerShadow};
  outline: none;
  font-family: ${fonts.family};
`;

export const ImageInput = styled.label`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: ${shadows.outsideShadow};
  background: ${colors.backgroundColor};
  cursor: pointer;
  overflow: hidden;

  img {
    width: 120px;
    position: relative;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
  }

  input {
    display: none;
  }
`;
