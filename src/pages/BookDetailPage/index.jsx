import BookDetail from '../../components/BookDetail';
import { useFetchBook } from '../../hooks/useFetchBook';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchABook } from '../../redux/actions/actions';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailPage = () => {
  // const { book } = useFetchBook();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchABook(id));
  });

  const book = useSelector(state => state.detail);

  return (book ? <BookDetail book={book} /> : null)
}

export default BookDetailPage;
