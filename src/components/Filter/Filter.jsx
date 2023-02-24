// import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import { getFilter } from 'redux/selectors';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  // console.log(filter);

  const changeFilter = evt => {
    // console.log(evt.currentTarget.value);
    dispatch(setFilter(evt.currentTarget.value));
    // setFilter(evt.currentTarget.value);
  };

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        placeholder="Put the name for search"
      />
    </FilterLabel>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

/**
 *
 *
 *
 */
// import { PropTypes } from 'prop-types';

// import { FilterLabel, FilterInput } from './Filter.styled';

// export const Filter = ({ value, onChange }) => {
//   return (
//     <FilterLabel htmlFor="filter">
//       Find contacts by name
//       <FilterInput
//         type="text"
//         name="filter"
//         value={value}
//         onChange={onChange}
//         placeholder="Put the name for search"
//       />
//     </FilterLabel>
//   );
// };

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
