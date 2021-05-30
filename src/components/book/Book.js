import React, { Component } from 'react';
import BookActions from './BookActions';
import DefaultCover from '../../images/book-default.jpg';

class Book extends Component {
  render() {
    const { book } = this.props;
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks ? book.imageLinks.thumbnail : DefaultCover
                })`,
              }}
            />
            <BookActions book={book} />
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>
            {book.authors ? book.authors.join(', ') : ''}
          </div>
        </div>
      </li>
    );
  }
}

export default Book;
