const initialState = {
  trending: [],
  current: {},
};

export const experiencesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TRENDING_EXPERIENCES':
      return { ...state, trending: payload };

    case 'SET_CURRENT_EXPERIENCE':
      return { ...state, current: payload };

    default:
      return state;
  }
};
