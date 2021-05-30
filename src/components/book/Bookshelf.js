import React from 'react';
import Book from './Book';

const Bookshelf = (props) => {
  const { bookshelfTitle, books } = props;
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{bookshelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
