import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import BooksContext from '../../context/booksContext';

const SearchForm = () => {
  const booksContext = useContext(BooksContext);
  const [query, setQuery] = useState('');
  const onChange = (e) => {
    let searchQuery = e.target.value;
    setQuery(searchQuery);

    booksContext.searchBooks(searchQuery);
  };

  return (
    <div className='search-books-bar'>
      <Link to='/'>
        <button className='close-search' type='button'>
          Close
        </button>
      </Link>
      <div className='search-books-input-wrapper'>
        <input
          type='search'
          placeholder='Search by title or author'
          value={query}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchForm;
