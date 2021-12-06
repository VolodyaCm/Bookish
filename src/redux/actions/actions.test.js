import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { setSearchTerm, fetchBooks, fetchABook } from './actions';
import * as TYPES from './types';

const mockStore = configureMockStore([thunk]);

const getBooks = () => {
  return [
    { id: 1, name: 'Refactoring' },
    { id: 2, name: 'Domain Driven Design' },
  ];
}
const getStore = () => {
  axios.get = jest.fn().mockImplementation(
    () => Promise.resolve({ data: getBooks() })
  );
  return mockStore({ books: [] });
}

describe('BookListContainer related actions', () => {
  it('Sets the search keyword', () => {
    const term = '';
    const expected = {
      type: TYPES.SET_SEARCH_TERM,
      term
    }
    const action = setSearchTerm(term);
    expect(action).toEqual(expected);
  })

  it('Fetches date successfuly', () => {
    const expetedActions = [
      { type: TYPES.FETCH_BOOKS_PENDING },
      { type: TYPES.FETCH_BOOKS_SUCCESS, books: getBooks() },
    ];
    const store = getStore();
    return store.dispatch(fetchBooks('')).then(
      () => { expect(store.getActions()).toEqual(expetedActions) }
    )
  })

  it('Fetch data with error', () => {
    axios.get = jest.fn().mockImplementation(
      () => Promise.reject({ message: 'Something went wrong' })
    );
    const expetedActions = [
      { type: TYPES.FETCH_BOOKS_PENDING },
      { type: TYPES.FETCH_BOOKS_FAILED, error: 'Something went wrong' },
    ];
    const store = mockStore({ books: [] });
    return store.dispatch(fetchBooks('')).catch(
      () => { expect(store.getActions()).toEqual(expetedActions) }
    )
  })

  it('Search date with term', () => {
    const store = getStore();
    return store.dispatch(fetchBooks('domain')).then(
      () => { expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books?q=domain') }
    )
  })

  it('Fetch book by id', () => {
    const book = { id: 1, name: 'Refactoring' };
    axios.get = jest.fn().mockImplementation(
      () => Promise.resolve({ data: book })
    );

    const store = mockStore({ list: { books: [], term: '' } })

    return store.dispatch(fetchABook(1)).then(
      (data) => {
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/books/1');
      }
    )
  })
})
