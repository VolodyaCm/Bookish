import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import withStoreProvider from '../../helpers/withStoreProvider';
import BooksPage from './index';
import { render } from '@testing-library/react';


describe('BooksPage', () => {
  it('renders', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet(`http://localhost:8080/books?q=`).reply(200, [
      { 'name': 'Refactoring', 'id': 1 },
      { 'name': 'Acceptance tests', 'id': 2 },
    ])
    const { findByText } = render(withStoreProvider(<BooksPage/>));

    const book1 = await findByText('Refactoring');
    const book2 = await findByText('Acceptance tests');

    expect(book1).toBeInTheDocument();
    expect(book2).toBeInTheDocument();
  })
});
