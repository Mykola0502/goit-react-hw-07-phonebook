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
import { Loader } from 'components/Loader';

import { Container, Title, SubTitle, ContactText } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {error && <p>{error}</p>}
      {items.length || filter ? (
        <>
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </>
      ) : (
        <ContactText>There are no phone numbers in Contacts!</ContactText>
      )}
    </Container>
  );
};
