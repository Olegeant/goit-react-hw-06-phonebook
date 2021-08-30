import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import { ReactComponent as PersonIcon } from '../../images/person.svg';
import { ReactComponent as PhoneIcon } from '../../images/phone.svg';
import { ReactComponent as AddIcon } from '../../images/add-plus.svg';
import styles from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

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
      return toast.error(`"${name}" is already in contacts!`);
    }

    dispatch(actions.addContact({ name, number }));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const makeLabelClass = (value, type) => {
    return [
      styles.label,
      ...(isStringValid(value, pattern[type]) ? [] : [styles.invalid]),
    ].join(' ');
  };

  const makeSubmitBtnClass = () => {
    return [
      styles.submit,
      ...(name &&
      number &&
      isStringValid(name, pattern.name) &&
      isStringValid(number, pattern.number)
        ? []
        : [styles.invalid]),
    ].join(' ');
  };

  return (
    <form autoComplete="off" className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={makeLabelClass(name, 'name')}>
        Name
        <PersonIcon className={styles.FieldIcon} width={20} height={20} />
        <input
          type="text"
          name="name"
          value={name}
          className={styles.field}
          onChange={handleInputChange}
          pattern={pattern.name}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label htmlFor="number" className={makeLabelClass(number, 'number')}>
        Number
        <PhoneIcon className={styles.FieldIcon} width={20} height={20} />
        <input
          type="tel"
          name="number"
          value={number}
          className={styles.field}
          onChange={handleInputChange}
          pattern={pattern.number}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit" className={makeSubmitBtnClass()}>
        <AddIcon className={styles.AddIcon} width={16} height={16} />
        Add Contact
      </button>
    </form>
  );
};

export default Form;
