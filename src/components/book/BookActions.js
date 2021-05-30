import React, { useContext } from 'react';
import BooksContext from '../../context/booksContext';

const BookActions = (props) => {
  const booksContext = useContext(BooksContext);
  const onChange = (e) => {
    const book = props.book;
    const shelf = e.target.value;

    shelf !== '' && booksContext.updateBook(book, shelf);
  };

  return (
    <div className='book-shelf-changer'>
      <select onChange={onChange}>
        <option value=''>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default BookActions;
