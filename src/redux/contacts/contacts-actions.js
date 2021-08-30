import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const addContact = createAction('contacts/add', contact => ({
  payload: {
    id: shortid.generate(),
    ...contact,
  },
}));

export const deleteContact = createAction('contacts/delete');

export const setFilter = createAction('contacts/setFilter', filter => ({
  payload: filter.toLowerCase(),
}));
