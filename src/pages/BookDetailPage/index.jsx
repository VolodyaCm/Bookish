import BookDetail from '../../components/BookDetail';
import { useFetchBook } from '../../hooks/useFetchBook';

const BookDetailPage = () => {
  const { book } = useFetchBook();

  return (book ? <BookDetail book={book} /> : null)
}

export default BookDetailPage;
