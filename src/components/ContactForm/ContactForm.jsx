// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
// import toast from 'react-hot-toast';
// import * as yup from 'yup';
// import 'yup-phone';

// import { getContacts } from 'redux/selectors';
// import { addContact } from 'redux/contactsSlice';
// import { Formik, ErrorMessage } from 'formik';
// import {
//   FormContact,
//   FormLabel,
//   Input,
//   ErrorText,
//   AddBtn,
// } from './ContactForm.styled';

// let schema = yup.object().shape({
//   name: yup.string().min(3).required(),
//   number: yup.string().phone('UA').required(),
// });

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage
//       name={name}
//       render={message => <ErrorText>{message}</ErrorText>}
//     />
//   );
// };

// const initialValues = {
//   name: '',
//   number: '',
// };

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   const onAddContact = data => {
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
//     dispatch(addContact(newContact));
//   };

//   const handleSubmit = (values, { resetForm }) => {
//     onAddContact(values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <FormContact>
//         <FormLabel htmlFor="name">
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             placeholder="Name"
//             required
//           />
//           <FormError name="name" />
//         </FormLabel>
//         <FormLabel htmlFor="number">
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             placeholder="Number"
//             required
//           />
//           <FormError name="number" />
//         </FormLabel>
//         <AddBtn type="submit">Add contact</AddBtn>
//       </FormContact>
//     </Formik>
//   );
// };
