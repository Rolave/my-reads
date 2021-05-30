import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import BooksContext from '../../context/booksContext';
import Bookshelf from '../book/Bookshelf';

const Main = () => {
  const booksContext = useContext(BooksContext);
  const { books } = booksContext;

  return (
    <>
      <Header />
      <div className='list-books'>
        <div className='list-books-content'>
          <Bookshelf
            books={books.filter((book) => book.shelf === 'currentlyReading')}
            bookshelfTitle={'Currently Reading'}
          />
          <Bookshelf
            books={books.filter((book) => book.shelf === 'wantToRead')}
            bookshelfTitle={'Want To Read'}
          />
          <Bookshelf
            books={books.filter((book) => book.shelf === 'read')}
            bookshelfTitle={'Read'}
          />
        </div>
        <div className='open-search'>
          <Link to='/search'>
            <button type='button'>Add a book</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Main;
