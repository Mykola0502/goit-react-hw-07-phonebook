import { useSelector } from 'react-redux';
// import { PropTypes } from 'prop-types';

import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem';
import { FilterText } from 'components/App/App.styled';

const getVisibleContacts = (contacts, filter) => {
  const filterNormalized = filter.toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterNormalized)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = getVisibleContacts(contacts, filter);
  // console.log(visibleContacts);

  return visibleContacts.length ? (
    <>
      <ul>
        {visibleContacts
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(contact => (
            <li key={contact.id}>
              <ContactItem contact={contact} />
            </li>
          ))}
      </ul>
    </>
  ) : (
    <>
      <FilterText>No matches found for "{filter}"!</FilterText>
    </>
  );
  // <ul>
  //   {visibleContacts
  //     .sort((a, b) => a.name.localeCompare(b.name))
  //     .map(contact => (
  //       <li key={contact.id}>
  //         <ContactItem contact={contact} />
  //       </li>
  //     ))}
  // </ul>
};

// export const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts
//         .sort((a, b) => a.name.localeCompare(b.name))
//         .map(({ id, name, number }) => (
//           <li key={id}>
//             <ContactItem
//               id={id}
//               name={name}
//               number={number}
//               deleteContact={onDeleteContact}
//             />
//           </li>
//         ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

/**
 *
 *
 *
 *
 */
// import { PropTypes } from 'prop-types';

// import { ContactItem } from 'components/ContactItem';

// export const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ul>
//       {contacts
//         .sort((a, b) => a.name.localeCompare(b.name))
//         .map(({ id, name, number }) => (
//           <li key={id}>
//             <ContactItem
//               id={id}
//               name={name}
//               number={number}
//               deleteContact={onDeleteContact}
//             />
//           </li>
//         ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
