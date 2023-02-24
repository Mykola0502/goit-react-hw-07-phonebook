// import { useDispatch } from 'react-redux';
// import { PropTypes } from 'prop-types';

// import { deleteContact } from 'redux/contactsSlice';

// import { Item, Number, DeleteBtn } from './ContactItem.styled';

// export const ContactItem = ({ contact }) => {
//   const { id, name, number } = contact;
//   // console.log(contact);
//   // console.log(id, name, number);

//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(id));

//   return (
//     <Item>
//       <span>{name}: </span>
//       <Number>{number}</Number>
//       <DeleteBtn type="button" onClick={handleDelete}>
//         Delete
//       </DeleteBtn>
//     </Item>
//   );
// };

// ContactItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }),
// };
