import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId =>
    dispatch(actions.deleteContact(contactId));

  return filteredContacts.length ? (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.notification}>No contact found</p>
  );
}
