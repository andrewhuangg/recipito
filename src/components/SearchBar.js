import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchQuery = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='search'>
      <form className='search__form' onSubmit={fetchQuery}>
        <input
          className='search__input'
          type='text'
          value={search}
          onChange={handleSearch}
          placeholder='type an ingredient in... beef'
        />
        <button className='search__cta' type='submit'>
          <i className='fas fa-search' />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
