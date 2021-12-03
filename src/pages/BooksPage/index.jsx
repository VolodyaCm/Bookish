import BookList from '../../components/BookList';
import { useRemoteService } from '../../hooks/useRemoteService';
import { TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';

const API = 'http://localhost:8080/books';

const BooksPage = () => {
  const { data, error, loading, setUrl } = useRemoteService(API, []);
  const [term, setTerm] = useState('');

  const changeSearchTerm = (e) => setTerm(e.target.value);

  useEffect(() => {
    setUrl(`${API}?q=${term}`);
  }, [term])


  console.log('')
  return (
    <>
      <TextField
        label='Search'
        data-test='search'
        value={term}
        onChange={changeSearchTerm}
        margin='normal'
        variant='outlined' />

      <BookList
        books={data}
        loading={loading}
        error={error} />
    </>
  )
}

export default BooksPage;
