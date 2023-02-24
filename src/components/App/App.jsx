import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

import {
  Container,
  Title,
  SubTitle,
  // FilterText,
  ContactText,
} from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // const getContactsState = () => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   if (savedContacts !== null) {
  //     const parsedContacts = JSON.parse(savedContacts);
  //     return parsedContacts;
  //   }
  // };

  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     getContactsState() ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ]
  //   );
  // });
  // const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length || filter ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <ContactText>There are no phone numbers in Contacts!</ContactText>
      )}
      {/* {contacts.length || filter ? (
        contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <>
            <Filter />
            <FilterText>No matches found for "{filter}"!</FilterText>
          </>
        )
      ) : (
        <ContactText>There are no phone numbers in Contacts!</ContactText>
      )} */}
    </Container>
  );
};

// const getContactsState = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     const parsedContacts = JSON.parse(savedContacts);
//     return parsedContacts;
//   }
// };

// export const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     return (
//       getContactsState() ?? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//     );
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = data => {
//     const newContact = {
//       id: nanoid(3),
//       name: data.name,
//       number: data.number,
//     };
//     const dataNameNormalized = newContact.name.toLowerCase();
//     const anyName = contacts.some(
//       ({ name }) => dataNameNormalized === name.toLowerCase()
//     );
//     const anyNumber = contacts.some(
//       ({ number }) => newContact.number === number
//     );
//     const findNumber = contacts.find(
//       ({ number }) => newContact.number === number
//     );
//     const notifyErrorName = () =>
//       toast.error(`"${newContact.name}" is already in contacts`);
//     const notifyErrorNumber = () =>
//       toast.error(
//         `Number "${newContact.number}" is already saved as "${findNumber.name}"`
//       );
//     const notifySucces = () =>
//       toast.success(`"${newContact.name}" successfully added!`);

//     if (anyName) {
//       notifyErrorName();
//       return;
//     }
//     if (anyNumber) {
//       notifyErrorNumber();
//       return;
//     }
//     notifySucces();
//     setContacts(prevState => [...prevState, newContact]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactId)
//     );
//   };

//   const changeFilter = evt => {
//     setFilter(evt.currentTarget.value);
//   };

//   const getVisibleContact = () => {
//     const filterNormalized = filter.toLowerCase().trim();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterNormalized)
//     );
//   };

//   const visibleContacts = getVisibleContact();

//   return (
//     <Container>
//       <Toaster position="top-center" reverseOrder={false} />
//       <Title>Phonebook</Title>
//       <ContactForm onSubmit={addContact} />
//       <SubTitle>Contacts</SubTitle>
//       {visibleContacts.length || filter ? (
//         visibleContacts.length ? (
//           <>
//             <Filter value={filter} onChange={changeFilter} />
//             <ContactList
//               contacts={visibleContacts}
//               onDeleteContact={deleteContact}
//             />
//           </>
//         ) : (
//           <>
//             <Filter value={filter} onChange={changeFilter} />
//             <FilterText>No matches found for "{filter}"!</FilterText>
//           </>
//         )
//       ) : (
//         <ContactText>There are no phone numbers in Contacts!</ContactText>
//       )}
//     </Container>
//   );
// };

/**
 *
 *
 *
 *
 */

// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import toast, { Toaster } from 'react-hot-toast';

// import { ContactForm } from 'components/ContactForm';
// import { ContactList } from 'components/ContactList';
// import { Filter } from 'components/Filter';

// import {
//   Container,
//   Title,
//   SubTitle,
//   FilterText,
//   ContactText,
// } from './App.styled';

// const getContactsState = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     const parsedContacts = JSON.parse(savedContacts);
//     return parsedContacts;
//   }
// };

// export const App = () => {
//   const [contacts, setContacts] = useState(() => {
//     return (
//       getContactsState() ?? [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//       ]
//     );
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = data => {
//     const newContact = {
//       id: nanoid(3),
//       name: data.name,
//       number: data.number,
//     };
//     const dataNameNormalized = newContact.name.toLowerCase();
//     const anyName = contacts.some(
//       ({ name }) => dataNameNormalized === name.toLowerCase()
//     );
//     const anyNumber = contacts.some(
//       ({ number }) => newContact.number === number
//     );
//     const findNumber = contacts.find(
//       ({ number }) => newContact.number === number
//     );
//     const notifyErrorName = () =>
//       toast.error(`"${newContact.name}" is already in contacts`);
//     const notifyErrorNumber = () =>
//       toast.error(
//         `Number "${newContact.number}" is already saved as "${findNumber.name}"`
//       );
//     const notifySucces = () =>
//       toast.success(`"${newContact.name}" successfully added!`);

//     if (anyName) {
//       notifyErrorName();
//       return;
//     }
//     if (anyNumber) {
//       notifyErrorNumber();
//       return;
//     }
//     notifySucces();
//     setContacts(prevState => [...prevState, newContact]);
//   };

//   const deleteContact = contactId => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactId)
//     );
//   };

//   const changeFilter = evt => {
//     setFilter(evt.currentTarget.value);
//   };

//   const getVisibleContact = () => {
//     const filterNormalized = filter.toLowerCase().trim();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filterNormalized)
//     );
//   };

//   const visibleContacts = getVisibleContact();

//   return (
//     <Container>
//       <Toaster position="top-center" reverseOrder={false} />
//       <Title>Phonebook</Title>
//       <ContactForm onSubmit={addContact} />
//       <SubTitle>Contacts</SubTitle>
//       {visibleContacts.length || filter ? (
//         visibleContacts.length ? (
//           <>
//             <Filter value={filter} onChange={changeFilter} />
//             <ContactList
//               contacts={visibleContacts}
//               onDeleteContact={deleteContact}
//             />
//           </>
//         ) : (
//           <>
//             <Filter value={filter} onChange={changeFilter} />
//             <FilterText>No matches found for "{filter}"!</FilterText>
//           </>
//         )
//       ) : (
//         <ContactText>There are no phone numbers in Contacts!</ContactText>
//       )}
//     </Container>
//   );
// };
