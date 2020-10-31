import { baseUrl } from '../../config';

export const TOKEN_KEY = 'token';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const removeToken = token => ({ type: REMOVE_TOKEN });
export const setToken = (token, user) => ({ type: SET_TOKEN, token, user });

export const loadToken = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const login = (email, password) => async dispatch => {
  const response = await fetch(`${baseUrl}/users/token`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });

  if (response.ok) {
    const { token, user } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem('userId', user.id);
    dispatch(setToken(token, user));
    return null;
  } else {
    const { error: { errors } } = await response.json();
    return errors;
  }
};

export const signup = (userInfo) => async dispatch => {
  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  });

  if (response.ok) {
    const { token, user } = await response.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.setItem('userId', user.id);
    dispatch(setToken(token));
    return null;
  } else {
    const { error: { errors } } = await response.json();
    return errors;
  }
};

export const logout = () => async (dispatch, getState) => {
  const {
    authentication: { token }
  } = getState();
  const response = await fetch(`${baseUrl}/users/token`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` }
  });
  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
  }
};