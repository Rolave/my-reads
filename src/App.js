import React from 'react';
import { Route } from 'react-router-dom';
import BooksState from './context/BooksState';
import Main from './components/main/Main';
import Search from './components/search/Search';
import './App.css';

const BooksApp = () => {
  return (
    <BooksState>
      <div className='app'>
        <Route exact path='/' component={Main} />
        <Route exact path='/search' component={Search} />
      </div>
    </BooksState>
  );
};

export default BooksApp;
