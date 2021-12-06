import BookList from '../../components/BookList';
import SearchBox from '../../components/SearchBox';
import * as actions from '../../redux/actions/actions';
import { useRemoteService } from '../../hooks/useRemoteService';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bookListSelector from '../../redux/selectors/selector';

const API = 'http://localhost:8080/books';

const BooksPage = () => {
  // const { data, error, loading, setUrl } = useRemoteService(API, []);
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector(bookListSelector);

  const changeSearchTerm = (e) => setTerm(e.target.value);

  useEffect(() => {
    dispatch(actions.fetchBooks(term))
  }, [term]);

  return (
    <>
      <SearchBox
        term={term}
        onSearch={changeSearchTerm} />

      <BookList
        books={books}
        loading={loading}
        error={error} />
    </>
  )
}

export default BooksPage;
