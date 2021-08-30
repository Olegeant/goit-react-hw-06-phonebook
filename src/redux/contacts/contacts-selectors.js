export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);

  return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
};

export const checkIfSmthInPhonebook = state => state.contacts.items.length > 0;
