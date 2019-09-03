import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  user: null,
  errors: {},
  articles: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESSFUL':
    return Object.assign({}, state, {
      user: action.data,
      errors: null,
    });

  case 'LOGIN_ERROR':
    return Object.assign({}, state, {
      errors: action.data,
      user: null,
    });

  case 'ADD_ARTICLE':
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });

  default:
    return state;
  }
}