import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './index';

describe('SearchBox', () => {
  it('renders input', () => {
    const props = {
      term: '',
      onSearch: jest.fn(),
    }
    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input');
    userEvent.type(input, 'domain');
    expect(props.onSearch).toHaveBeenCalled();
  })

  it('trim empty string', () => {
    const props = {
      term: '',
      onSearch: jest.fn(),
    }
    const { container } = render(<SearchBox {...props} />);
    const input = container.querySelector('input');
    userEvent.type(input, '  ');
    expect(props.onSearch).not.toHaveBeenCalled();
  })
})
