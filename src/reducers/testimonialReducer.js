const initialState = {
  show: false,
};

export const testimonialReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW_TESTIMONIAL':
      return { ...state, show: payload };

    case 'HIDE_TESTIMONIAL':
      return { ...state, show: payload };

    default:
      return state;
  }
};
