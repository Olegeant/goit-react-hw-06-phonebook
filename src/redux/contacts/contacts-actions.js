import shortid from 'shortid';
import actionTypes from './contacts-types';

export const addContact = contact => ({
  type: actionTypes.ADD_CONTACT,
  payload: { id: shortid.generate(), ...contact },
});

export const deleteContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const setFilter = filter => ({
  type: actionTypes.SET_CONTACT_FILTER,
  payload: filter.toLowerCase(),
});
