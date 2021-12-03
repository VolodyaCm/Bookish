import { render } from '@testing-library/react';
import BookDetail from './index';

describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring',
      }
    }
    const { container } = render(<BookDetail {...props} />);
    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(props.book.name);
  })

  it('renders description', () => {
    const props = {
      book: {
        name: 'Refactoring',
        description: 'Martin Fowlers Refactoring defined core ideas and techniques',
      }
    }

    const { container } = render(<BookDetail {...props} />);
    const description = container.querySelector('p.book-description');
    expect(description.innerHTML).toEqual(props.book.description);
  })

  it('displays the book name when no dexription was given', () => {
    const props = {
      book: {
        name: 'Refactoring'
      },
    }
    const { container } = render(<BookDetail {...props} />);
    const description = container.querySelector('p.book-description');
    expect(description.innerHTML).toEqual(props.book.name);
  })

  // it('Show *more* link when description is too long', () => {
  //   const props = {
  //     book: {
  //       name: 'Refactoring',
  //       description: 'The book about how to do refactoring ....'
  //     }
  //   }
  //   const { container } = render(<BookDetail {...props} />);
  //   const description = container.querySelector('p.book-description');
  //   const link = container.querySelector('a.show-more');

  //   expect(link.innerHTML).toEqual('Show more');
  //   expect(description.innerHTML).toEqual(props.book.description)
  // })
})
