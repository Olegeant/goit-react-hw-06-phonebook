import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import * as actions from '../../redux/contacts/contacts-actions';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSearch = evt => dispatch(actions.setFilter(evt.target.value));

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="name" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.filter}
        value={filter}
        onChange={onSearch}
      />
    </div>
  );
}
