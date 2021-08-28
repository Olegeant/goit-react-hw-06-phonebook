import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

const getStateFromLocalStorage = () =>
  JSON.parse(window.localStorage.getItem('contacts')) ?? [];

const items = (state = getStateFromLocalStorage(), { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    case actionTypes.DELETE_CONTACT:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.SET_CONTACT_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
