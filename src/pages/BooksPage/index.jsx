import BookList from '../../components/BookList';
import { useRemoteService } from '../../hooks/useRemoteService';

const BooksPage = () => {
  const { data, error, loading } = useRemoteService([]);
  return (
    <BookList books={data} loading={loading} error={error} />
  )
}

export default BooksPage;
