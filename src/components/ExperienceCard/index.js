// ------------------------------ import libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';

// ------------------------------ import styles and images
import { CardStyled, CardImg, TitleCard } from './styles';

// ------------------------------------ COMPONENT ------------------------------------//
// this card shows the experiences, their rating and name.
// it is in diferent pages, so it's styles has many validations to the difernts positions in the diferentes grids

export const ExperienceCard = ({
  position,
  page,
  _id,
  title,
  rating,
  image,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <CardStyled position={`${page}${position}`} key={_id}>
      <Link to={`/experience/${_id}`}>
        <Rate rate={rating[0]} />
        <div>
          <CardImg src={image[0]} alt="travel image #1" />
          <TitleCard>{title}</TitleCard>
        </div>
      </Link>
      <Icon
        type={liked ? 'favoriteHeart' : 'emptyHeart'}
        click={() => setLiked(!liked)}
      />
    </CardStyled>
  );
};
