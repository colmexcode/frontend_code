export const setTrending = () => async (dispatch) => {
  const response = await fetch(
    'https://cozyplace.herokuapp.com/api/post/',
  );
  const data = await response.json();
  return dispatch({
    type: 'SET_TRENDING_EXPERIENCES',
    payload: data.data.slice(0, 4),
  });
};

export const searchExperiences = (city) => async (dispatch) => {
  const response = await fetch(
    'https://cozyplace.herokuapp.com/api/show/home',
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        location: city,
      }),
    },
  );
  const data = await response.json();

  return dispatch({
    type: 'SET_TRENDING_EXPERIENCES',
    payload: data.data.slice(0, 4),
  });
};

export const setCurrentExperience = (id) => async (dispatch) => {
  const response = await fetch(
    `https://cozyplace.herokuapp.com/api/post/${id}`,
  );
  const data = await response.json();
  return dispatch({
    type: 'SET_CURRENT_EXPERIENCE',
    payload: data.data,
  });
};
