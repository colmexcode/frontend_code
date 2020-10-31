// ------------------------------ import libraries
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// ------------------------------ import components
import { Rate } from '../Rate';
import { Icon } from '../Icons';
import { addFavorite } from '../../utils/addFavorite';
import { deleteFavorite } from '../../utils/deleteFavorite';

// ------------------------------ import styles and images
import { CardStyled, CardImg, TitleCard } from './styles';
import mockupPicture from '../../assets/images/mockupPicture.jpg';

// -----------------Redux actions
import { getUserData } from '../../actions/userActions';

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
  inUser,
}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer.userData);
  const { token, favorite } = userData;

  const findInFavList = favorite?.find(
    (experience) => experience._id === _id,
  );
  const isFav = favorite?.includes(findInFavList);

  const [liked, setLiked] = useState(isFav);

  const displayHeartBroken = token && isFav && inUser;
  const displayHeart = token && !inUser;

  async function addFav() {
    if (!isFav) {
      const response = await addFavorite(_id, token);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setLiked(true);
        dispatch(getUserData(userData._id, token));
      }
    } else {
      console.log('esta repetido');
    }
  }

  async function deleteFav() {
    const response = await deleteFavorite(_id, token);
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setLiked(false);
      dispatch(getUserData(userData._id, token));
    }
  }

  return (
    <CardStyled position={`${page}${position}`} key={_id}>
      <Link to={`/experience/${_id}`}>
        <Rate rate={rating[0]} />
        <div>
          <CardImg src={mockupPicture} alt="travel image #1" />
          <TitleCard>{title}</TitleCard>
        </div>
      </Link>
      {displayHeartBroken ? (
        <Icon type="heartBroken" click={deleteFav} />
      ) : null}
      {displayHeart ? (
        <Icon
          type={liked ? 'favoriteHeart' : 'emptyHeart'}
          click={liked ? deleteFav : addFav}
        />
      ) : null}
    </CardStyled>
  );
};
