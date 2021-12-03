import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const useFetchBook = (initial) => {
  const [book, setBook] = useState(initial);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      const book = await axios.get(`http://localhost:8080/books/${id}`);
      setBook(book.data);
    }
    fetchBook();
  }, [])
  console.log('Book', book);
  return { book };
}
