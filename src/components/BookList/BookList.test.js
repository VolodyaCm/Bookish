import { render } from '@testing-library/react';
import BookList from './index';
import { BrowserRouter } from 'react-router-dom';

describe('BookList', () => {
  it('loading', () => {
    const props = { loading: true };
    const {container} = render(<BookList {...props} />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Loading');
  })

  it('error', () => {
    const props = { error: true };
    const {container} = render(<BookList {...props} />);
    const content = container.querySelector('p');
    expect(content.innerHTML).toContain('Error');
  })

  it('data', () => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Domain-driven design ', id: 2 },
    ]
    const { container } = render(
      <BrowserRouter>
        <BookList books={books} />
      </BrowserRouter>
    );
    const titles = [...container.querySelectorAll('h2')].map(t => t.innerHTML);
    expect(titles).toEqual(books.map(b => b.name))
  })
})
