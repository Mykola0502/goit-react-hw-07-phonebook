import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectIsLoading,
  selectError,
  selectFilter,
} from 'redux/selectors';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

import { Container, Title, SubTitle, ContactText } from './App.styled';
import { Loader } from 'components/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  // console.log(isLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {/* {isLoading && !error && <Loader />} */}
      {error && <p>{error}</p>}
      {/* <p>{items.length && JSON.stringify(items, null, 2)}</p> */}
      {/* <ContactList /> */}
      {items.length || filter ? (
        <>
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </>
      ) : (
        <ContactText>There are no phone numbers in Contacts!</ContactText>
      )}
      {/* {items.length || filter ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <ContactText>There are no phone numbers in Contacts!</ContactText>
      )} */}
    </Container>
  );
};

/**
 *
 *
 */
// import { useEffect } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { useSelector } from 'react-redux';

// import { getContacts, getFilter } from 'redux/selectors';
// import { ContactForm } from 'components/ContactForm';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';

// import {
//   Container,
//   Title,
//   SubTitle,
//   ContactText,
// } from './App.styled';

// export const App = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <Container>
//       <Toaster position="top-center" reverseOrder={false} />
//       <Title>Phonebook</Title>
//       <ContactForm />
//       <SubTitle>Contacts</SubTitle>
//       {contacts.length || filter ? (
//         <>
//           <Filter />
//           <ContactList />
//         </>
//       ) : (
//         <ContactText>There are no phone numbers in Contacts!</ContactText>
//       )}
//     </Container>
//   );
// };
