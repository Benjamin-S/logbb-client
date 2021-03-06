import { HOME_PAGE_LOADED } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case HOME_PAGE_LOADED:
      return { ...state, babies: action.payload.baby };
    default:
  }
  return state;
};
