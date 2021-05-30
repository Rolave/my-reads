import React from 'react';
import Book from '../book/Book';

const SearchResults = (props) => {
  return (
    <div className='search-books-results'>
      <ol className='books-grid'>
        {props.books.length > 0 &&
          props.books.map((book) => <Book key={book.id} book={book} />)}
      </ol>
    </div>
  );
};

export default SearchResults;
