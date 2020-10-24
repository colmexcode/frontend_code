const initialState = {
  show: false,
  mouseCoordinates: { x: 0, y: 0 },
};

export const mapReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW_LOCATION':
      return { ...state, show: payload };

    case 'HIDE_LOCATION':
      return { ...state, show: payload };

    case 'SET_MOUSE':
      return { ...state, mouseCoordinates: payload };

    default:
      return state;
  }
};
