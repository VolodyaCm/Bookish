import axios from 'axios';
import * as TYPES from './types';

const API_URL = 'http://localhost:8080/books';

export const setSearchTerm = (term) => {
  return { type: TYPES.SET_SEARCH_TERM, term };
}

export const fetchBooks = (term) => {
  return (dispatch) => {
    dispatch({ type: TYPES.FETCH_BOOKS_PENDING });
    return axios.get(`${API_URL}?q=${term}`)
      .then(
        (res) => dispatch({ type: TYPES.FETCH_BOOKS_SUCCESS, books: res.data })
      )
      .catch(
        (error) => dispatch({ type: TYPES.FETCH_BOOKS_FAILED, error: error.message })
      )
  }
}

export const fetchABook = (id) => {
  return (dispatch) => {
    dispatch({ type: TYPES.FETCH_BOOK_PENDING })
    return axios.get(`${API_URL}/${id}`).then(
      (res) => dispatch({ type: TYPES.FETCH_BOOK_SUCCESS, detail: res.data })
    ).catch(
      (error) => dispatch({ type: TYPES.FETCH_BOOK_FAILED, error: error.message })
    )
  }
}
