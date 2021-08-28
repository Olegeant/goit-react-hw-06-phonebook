import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

const Form = ({ contacts, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const pattern = {
    name: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    number:
      '^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$',
  };

  const isStringValid = (str, pattern) => {
    const testRegExp = new RegExp(pattern);

    return str === '' || testRegExp.test(str);
  };

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('Wrong Input field name invoked!');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`"${name}" is already in contacts!`);
      return;
    }

    onFormSubmit({ name, number });

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const makeFieldClass = (value, type) => {
    return [
      styles.field,
      ...(isStringValid(value, pattern[type]) ? [] : [styles.invalid]),
    ].join(' ');
  };

  return (
    <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        value={name}
        className={makeFieldClass(name, 'name')}
        onChange={handleInputChange}
        pattern={pattern.name}
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />

      <label htmlFor="number" className={styles.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        value={number}
        className={makeFieldClass(number, 'number')}
        onChange={handleInputChange}
        pattern={pattern.number}
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button type="submit" className={styles.submit}>
        Add Contact
      </button>
    </form>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: contact => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
