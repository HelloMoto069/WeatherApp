import React, { useState } from 'react';
import { Search } from '../../icons/IconComponent';
import {
  SearchBarForm,
  Container,
  ButtonSearch,
  Input,
} from './Searchbar.styled';
import MyLocationCard from '../MyLocationCard/MyLocationCard';

export const SearchBar = ({ weather, setSearchCity }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim().length === 0) {
      alert('Field must be filled');
      return;
    }

    setSearchCity(value);
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <SearchBarForm onSubmit={handleSubmit}>
        <ButtonSearch type="submit" aria-label="search" title="Search">
          <Search />
        </ButtonSearch>
        <Input
          name="inputData"
          value={value}
          onChange={handleChange}
          type="text"
          autoFocus
          autoComplete="on"
          placeholder="Search for a city"
        />
      </SearchBarForm>
      <MyLocationCard weather={weather} />
    </Container>
  );
};
