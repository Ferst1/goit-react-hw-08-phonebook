import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterDiv } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterDiv>
      <label>Find by name:</label>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Enter name"
      />
    </FilterDiv>
  );
};
