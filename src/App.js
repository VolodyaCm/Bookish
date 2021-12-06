import { Typography } from '@material-ui/core';
import BooksPage from './pages/BooksPage';
import { Route, Routes } from 'react-router-dom';
import BookDetailPage from './pages/BookDetailPage';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
