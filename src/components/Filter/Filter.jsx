import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterDiv } from './Filter.styled';
import { useContacts } from 'hooks/useContacts';

export const Filter = () => {
  const filter = useContacts();
  const dispatch = useDispatch();

  const onChange = e => dispatch(setFilter(e.target.value));
  return (
    <FilterDiv>
      <label>Find by name: </label>
      <input
        type="text"
        name="filter"
        value={filter.filter}
        placeholder="Enter name"
        onChange={e => onChange(e)}
      />
    </FilterDiv>
  );
};
