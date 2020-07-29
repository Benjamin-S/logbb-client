import { LOGIN, REDIRECT, APP_LOAD, REGISTER } from '../constants/actionTypes';

const defaultState = {
  appName: 'Logbb',
  token: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null,
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case LOGIN:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.usser,
      };
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.token,
        currentUser: action.error ? null : action.payload.user,
      };
    default:
      console.log('Fell through common reducer switch statement');
      break;
  }
  return state;
};
