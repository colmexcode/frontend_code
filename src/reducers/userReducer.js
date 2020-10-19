const initialState = {
  userName: '',
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //start cases

    //end cases
    default:
      return state;
  }
};
