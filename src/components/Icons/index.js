// ------------------------------ import libraries
import React from 'react';

// ------------------------------ import styles and images
import clock from '../../assets/images/clockIcon.svg';
import close from '../../assets/images/closeIcon.svg';
import search from '../../assets/images/searchIcon.svg';
import location from '../../assets/images/locationIcon.svg';
import facebook from '../../assets/images/facebookIcon.svg';
import twitter from '../../assets/images/twitterIcon.svg';
import instagram from '../../assets/images/instagramIcon.svg';
import youtube from '../../assets/images/youtubeIcon.svg';

import { StyledIcon } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this is the icon component. It is one component to display the icons dynamically

// this objet has all the images icons
const icons = {
  clock,
  close,
  search,
  location,
  facebook,
  twitter,
  instagram,
  youtube,
};

// to use the icons set the prop type with one of the keys of icons object
export const Icon = ({ type, click }) => {
  return (
    <StyledIcon
      type="image"
      src={icons[type]}
      alt={type}
      onClick={click}
    />
  );
};
