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

export const getToken = (payload) => ({
  type: 'GET_TOKEN',
  payload,
});

export const setSelection = (payload) => ({
  type: 'SET_SELECTION',
  payload,
});

export const errorModal = (payload) => ({
  type: 'ERROR_MODAL',
  payload: true,
})