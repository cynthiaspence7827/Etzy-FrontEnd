import { SET_TOKEN, REMOVE_TOKEN } from '../actions/authentication';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
        loggedIn: true,
        currentUser: action.user
      };
    }

    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      newState.loggedIn = false;
      return newState;
    }

    default:
      return state;
  }
}