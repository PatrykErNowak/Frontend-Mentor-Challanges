import { screen } from '@testing-library/react';
import SearchForm from '../components/SearchForm';
import { render, testQueryClient } from './test-utils';

describe('SearchForm component', () => {
  testQueryClient.setQueryDefaults(['user'], { queryFn: () => {} });
  testQueryClient.setQueryData(['user'], {});

  test('render correctly', () => {
    render(<SearchForm />);

    const searchInput = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    expect(searchInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
