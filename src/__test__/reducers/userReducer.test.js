// ------------------------------ import components
import { userReducer } from '../../reducers/userReducer';
import { userMock } from '../../__mocks__/userMock';

// ------------------------------------ TESTS ------------------------------------//
const initialState = {
  displayModal: { sign: false, login: false },
  userData: {},
  selection: '',
};

describe('Testing User Reducer', () => {
  test('Return initial State', () => {
    expect(userReducer(initialState, '')).toEqual(initialState);
  });

  test('Get user data', () => {
    const expected = {
      displayModal: {
        sign: false,
        login: false,
      },
      userData: userMock,
    };
    const payload = userMock;
    const action = {
      type: 'GET_FORM',
      payload,
    };
    expect(userReducer(initialState, action)).toEqual(expected);
  });

  test('Open Sign in', () => {
    const expected = {
      displayModal: {
        sign: true,
        login: false,
      },
      userData: {},
    };
    const payload = true;
    const action = {
      type: 'OPEN_SIGNIN',
      payload,
    };
    expect(userReducer(initialState, action)).toEqual(expected);
  });

  test('Open Login', () => {
    const expected = {
      displayModal: {
        sign: false,
        login: true,
      },
      userData: {},
    };
    const payload = true;
    const action = {
      type: 'OPEN_LOGIN',
      payload,
    };
    expect(userReducer(initialState, action)).toEqual(expected);
  });

  test('Close Modal', () => {
    const expected = {
      displayModal: {
        sign: false,
        login: false,
      },
      userData: {},
    };
    const payload = false;
    const action = {
      type: 'CLOSE_MODAL',
      payload,
    };
    expect(userReducer(initialState, action)).toEqual(expected);
  });
});
