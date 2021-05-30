import React, { useContext } from 'react';
import BooksContext from '../../context/booksContext';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const Search = () => {
  const booksContext = useContext(BooksContext);

  return (
    <div className='search-books'>
      <SearchForm />
      <SearchResults books={booksContext.booksResults} />
    </div>
  );
};

export default Search;
