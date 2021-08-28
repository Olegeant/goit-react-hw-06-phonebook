import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/contacts/contacts-actions';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

function ContactList({ filteredContacts, onDelete }) {
  return filteredContacts.length ? (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  ) : (
    <p className={styles.notification}>No contact found</p>
  );
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const getFilteredContacts = (contacts, filter) =>
  contacts.filter(({ name }) => name.toLowerCase().includes(filter));

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  filteredContacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: contact => dispatch(actions.deleteContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
