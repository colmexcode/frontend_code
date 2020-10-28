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

export const getFormData = (payload) => ({
  type: 'GET_FORM',
  payload,
});

export const setSelection = (payload) => ({
  type: 'SET_SELECTION',
  payload,
});
