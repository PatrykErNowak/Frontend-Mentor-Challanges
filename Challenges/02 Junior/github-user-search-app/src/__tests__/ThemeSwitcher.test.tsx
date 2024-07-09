import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ThemeSwitcher from '../components/ThemeSwitcher';
import { DarkModeProvider } from '../context/DarkModeContext';

describe('Theme switcher component', () => {
  test('Render correctly', () => {
    render(<ThemeSwitcher />, { wrapper: DarkModeProvider });

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Dark');
  });

  test('Switch theme from light to dark by clicking', async () => {
    const user = userEvent.setup();

    render(<ThemeSwitcher />, { wrapper: DarkModeProvider });

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Dark');

    await user.click(button);

    expect(button).toHaveTextContent('Light');
  });
});
