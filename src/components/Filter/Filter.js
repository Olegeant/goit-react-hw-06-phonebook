import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ filter, onSearch }) {
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
        onChange={evt => onSearch(evt.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onSearch: filterValue => dispatch(actions.setFilter(filterValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
