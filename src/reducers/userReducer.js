const initialState = {
  displayModal: { sign: false, login: false, error: false },
  userData: localStorage.getItem('VERIFY')
    ? JSON.parse(localStorage.getItem('VERIFY'))
    : {},
  selection: 'favorites',
  experiencesDisplayed: [],
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'OPEN_SIGNIN':
      return {
        ...state,
        displayModal: { ...state.displayModal, sign: payload },
      };
    case 'OPEN_LOGIN':
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          login: payload,
          error: false,
        },
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        displayModal: { sign: payload, login: payload },
      };

    case 'GET_USER_DATA':
      localStorage.setItem('VERIFY', JSON.stringify(payload));

      return {
        ...state,
        userData: payload,
      };

    case 'UPDATE_USER':
      return {
        ...state,
        userData: { ...state.userData, ...payload },
      };
    case 'SET_SELECTION':
      return {
        ...state,
        selection: payload,
      };

    case 'GET_DISPLAYED_EXPERIENCES':
      return {
        ...state,
        experiencesDisplayed: payload,
      };
    case 'ERROR_MODAL':
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          login: false,
          error: payload,
        },
      };

    default:
      return state;
  }
};
