import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

import { deleteContact } from 'redux/operations';

import { Item, Number, DeleteBtn } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      <span>{name}: </span>
      <Number>{phone}</Number>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
