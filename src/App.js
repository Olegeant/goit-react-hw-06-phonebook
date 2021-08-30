import { useSelector } from 'react-redux';
import { checkIfSmthInPhonebook } from './redux/contacts/contacts-selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const isSmthInPhonebook = useSelector(checkIfSmthInPhonebook);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>

        <Form />
      </Section>

      <Section>
        <h2>Contacts</h2>

        {isSmthInPhonebook ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>Phonebook is empty</p>
        )}
      </Section>

      <ToastContainer autoClose={3000} theme="light" />
    </>
  );
};

export default App;
