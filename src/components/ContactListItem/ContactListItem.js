import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li className={styles.contactListItem}>
      <p className={styles.contactMeta}>
        {name}: <span className={styles.number}>{number}</span>
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
