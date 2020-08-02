import {
  LOGIN,
  REDIRECT,
  APP_LOAD,
  REGISTER,
  LOGOUT,
  SETTINGS_SAVED,
} from "../constants/actionTypes";

const defaultState = {
  appName: "Logbb",
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
    case LOGOUT:
      return { ...state, redirectTo: "/", token: null, currentUser: null };
    case SETTINGS_SAVED:
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        currentUser: action.error ? null : action.payload.user,
      };
    case LOGIN:
      return {
        ...state,
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user,
        redirectTo: action.error ? null : "/",
      };
    case REGISTER:
      return {
        ...state,
        redirectTo: action.error ? null : "/",
        token: action.error ? null : action.payload.token,
        currentUser: action.error ? null : action.payload.user,
      };
    default:
      return state;
  }
};
