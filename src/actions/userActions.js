import { getUserPosts } from '../utils/PostUser';
import { getFavoritePosts } from '../utils/getFavoritePosts';
import { getUser } from '../utils/getUserData';

export const openLogin = (payload) => ({
  type: 'OPEN_LOGIN',
  payload: true,
});

export const openSign = (payload) => ({
  type: 'OPEN_SIGNIN',
  payload: true,
});

export const closeModal = (payload) => ({
  type: 'CLOSE_MODAL',
  payload: false,
});

export const getUserData = (id, token) => async (dispatch) => {
  const data = await getUser(id, token);

  return dispatch({
    type: 'GET_USER_DATA',
    payload: { ...data, token },
  });
};

export const updateUserState = (payload) => ({
  type: 'UPDATE_USER',
  payload,
});

export const setSelection = (payload) => ({
  type: 'SET_SELECTION',
  payload,
});

export const errorModal = (payload) => ({
  type: 'ERROR_MODAL',
  payload: true,
});

export const getFavoriteExperiences = (id, token) => async (
  dispatch,
) => {
  const data = await getFavoritePosts(id, token);
  return dispatch({
    type: 'GET_DISPLAYED_EXPERIENCES',
    payload: data,
  });
};

export const getUserExperiences = (id, token) => async (dispatch) => {
  const data = await getUserPosts(id, token);
  return dispatch({
    type: 'GET_DISPLAYED_EXPERIENCES',
    payload: data,
  });
};
