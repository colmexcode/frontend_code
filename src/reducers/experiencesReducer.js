const initialState = {
  trending: [],
  current: {},
  allExperiences: [],
  creatingExperience: {},
  showIndicator: {
    status: false,
    message: '',
  },
  mouseCoordinates: { x: 0, y: 0 },
};

export const experiencesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_TRENDING_EXPERIENCES':
      return { ...state, trending: payload };

    case 'SET_CURRENT_EXPERIENCE':
      return { ...state, current: payload };

    case 'GET_ALL_EXPERIENCE':
      return { ...state, allExperiences: payload };

    case 'CREATE_EXPERIENCE':
      return { ...state, creatingExperience: payload };

    case 'SHOW_INDICATOR':
      return { ...state, showIndicator: payload };

    case 'SET_INDICATOR_POSITION':
      return { ...state, mouseCoordinates: payload };

    default:
      return state;
  }
};
