const initialState = {
  show: false,
};

export const mapReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW_LOCATION':
      return { ...state, show: payload };

    case 'HIDE_LOCATION':
      return { ...state, show: payload };

    default:
      return state;
  }
};
