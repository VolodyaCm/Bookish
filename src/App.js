import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import BooksPage from './pages/BooksPage';
import { Route, Routes } from 'react-router-dom';
import BookDetailPage from './pages/BookDetailPage';


function App() {
  return (
    <div className="App">
      <Typography
        variant='h2'
        component='h2'
        data-test='heading'>
        Bookish
      </Typography>
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route exact path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
