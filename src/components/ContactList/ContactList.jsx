// import { useSelector } from 'react-redux';

// import { getContacts, getFilter } from 'redux/selectors';
// import { ContactItem } from 'components/ContactItem';
// import { FilterText } from 'components/App/App.styled';

// const getVisibleContacts = (contacts, filter) => {
//   const filterNormalized = filter.toLowerCase().trim();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filterNormalized)
//   );
// };

// export const ContactList = () => {
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilter);

//   const visibleContacts = getVisibleContacts(contacts, filter);
//   // console.log(visibleContacts);

//   return visibleContacts.length ? (
//     <>
//       <ul>
//         {visibleContacts
//           .sort((a, b) => a.name.localeCompare(b.name))
//           .map(contact => (
//             <li key={contact.id}>
//               <ContactItem contact={contact} />
//             </li>
//           ))}
//       </ul>
//     </>
//   ) : (
//     <>
//       <FilterText>No matches found for "{filter}"!</FilterText>
//     </>
//   );
//  };
