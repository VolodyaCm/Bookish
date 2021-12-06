import * as TYPES from '../actions/types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.SET_SEARCH_TERM:
      return { ...state, term: action.term }
    case TYPES.FETCH_BOOK_PENDING:
      return { ...state, loading: true }
    case TYPES.FETCH_BOOK_SUCCESS:
      return { ...state, loading: false, detail: action.detail }
    case TYPES.FETCH_BOOKS_PENDING:
      return { ...state, loading: true }
    case TYPES.FETCH_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.books }
    default:
      return state;
  }
}

export default reducer;
