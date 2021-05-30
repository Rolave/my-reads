import { GET_ALL_BOOKS, GET_BOOK, SEARCH_BOOKS, UPDATE_BOOK } from './types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case GET_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case SEARCH_BOOKS:
      return {
        ...state,
        booksResults: action.payload,
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: action.payload,
      };
    default:
      return state;
  }
};
