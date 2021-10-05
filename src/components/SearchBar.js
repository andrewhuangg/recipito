import React, { useState } from 'react';

const SearchBar = ({ setQuery, handleDarkMode }) => {
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
        <div className='search__wrapper'>
          <button className='search__cta' type='submit'>
            <i className='fas fa-search' />
          </button>
          <div className='theme' onClick={handleDarkMode} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
