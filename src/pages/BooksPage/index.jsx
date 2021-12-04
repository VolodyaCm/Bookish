import BookList from '../../components/BookList';
import { useRemoteService } from '../../hooks/useRemoteService';
import { useState, useEffect } from 'react';
import SearchBox from '../../components/SearchBox';

const API = 'http://localhost:8080/books';

const BooksPage = () => {
  const { data, error, loading, setUrl } = useRemoteService(API, []);
  const [term, setTerm] = useState('');

  const changeSearchTerm = (e) => setTerm(e.target.value);

  useEffect(() => {
    setUrl(`${API}?q=${term}`);
  }, [term])

  return (
    <>
      <SearchBox
        term={term}
        onSearch={changeSearchTerm} />

      <BookList
        books={data}
        loading={loading}
        error={error} />
    </>
  )
}

export default BooksPage;
