import React, { useReducer, useEffect } from 'react';
import * as BooksAPI from '../BooksAPI';
import BooksContext from './booksContext';
import BooksReducer from './booksReducer';
import { GET_ALL_BOOKS, GET_BOOK, SEARCH_BOOKS, UPDATE_BOOK } from './types';

const BooksState = (props) => {
  const initialState = {
    book: {},
    books: [],
    booksResults: [],
  };

  const [state, dispatch] = useReducer(BooksReducer, initialState);

  // Get All Books
  const getAllBooks = async () => {
    const res = await BooksAPI.getAll().then((results) =>
      results.sort((a, b) => (a.title > b.title ? 1 : -1))
    );

    dispatch({
      type: GET_ALL_BOOKS,
      payload: res,
    });
  };

  // Get Book
  const getBook = async (bookID) => {
    const res = await BooksAPI.get(bookID);

    dispatch({
      type: GET_BOOK,
      payload: res,
    });
  };

  // Search Books
  const searchBooks = async (query) => {
    const res = await BooksAPI.search(query).then((results) => {
      const filteredShelvedBooks = state.books.filter((book) =>
        book.title.toLowerCase().startsWith(query.toLowerCase())
      );
      const getUpdatedresults = () =>
        results
          .filter(
            (result) =>
              !filteredShelvedBooks.some(
                (shelvedBook) => result.id === shelvedBook.id
              )
          )
          .concat(filteredShelvedBooks)
          .sort((a, b) => (a.title > b.title ? 1 : -1));

      return Array.isArray(results) && results.length > 0
        ? getUpdatedresults()
        : [];
    });

    dispatch({
      type: SEARCH_BOOKS,
      payload: res,
    });
  };

  // Update Book
  const updateBook = async (book, shelf) => {
    const res = await BooksAPI.update(book, shelf).then(() =>
      BooksAPI.getAll()
    );

    dispatch({
      type: UPDATE_BOOK,
      payload: res,
    });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <BooksContext.Provider
      value={{
        book: state.book,
        books: state.books,
        booksResults: state.booksResults,
        getAllBooks,
        getBook,
        searchBooks,
        updateBook,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;
