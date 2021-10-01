import React from 'react';

const SearchBar = () => {
  return (
    <div className='search'>
      <form className='search__form'>
        <input className='search__input' type='text' />
        <button className='search__cta' type='submit'>
          <i className='fas fa-search' /> Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
