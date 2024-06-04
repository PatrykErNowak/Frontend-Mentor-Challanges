import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('Render "TODO" heading', () => {
    render(<Header darkTheme={false} onClick={() => null} />);

    const heading = screen.getByText('todo', { exact: false });
    expect(heading).toBeInTheDocument();
  });

  test('Render Moon icon if theme is set to light', () => {
    render(<Header darkTheme={false} onClick={() => null} />);

    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('xlink:title', 'moon');
  });

  test('Render Sun icon if theme is set to dark', () => {
    render(<Header darkTheme={true} onClick={() => null} />);

    const icon = screen.getByRole('img');
    expect(icon).toHaveAttribute('xlink:title', 'sun');
  });

  test('Render only one icon', () => {
    render(<Header darkTheme={true} onClick={() => null} />);

    const icons = screen.getAllByRole('img');
    expect(icons).toHaveLength(1);
  });
});
