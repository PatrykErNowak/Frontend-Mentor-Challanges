import '@testing-library/jest-dom';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import Header from '../../ui/Header/Header';
import { render, screen } from '@testing-library/react';

describe('Header component', () => {
  const planets = ['mercury', 'venus', 'earth', 'mars'];
  const router = createMemoryRouter([{ path: '/', element: <Header planets={planets} /> }]);

  test('Render header logo', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const logoName = screen.getByText('the planets', { exact: false });

    expect(logoName).toBeInTheDocument();
  });

  test('Render all navigation items', () => {
    render(<RouterProvider router={router}></RouterProvider>);

    const navigation = screen.getByRole('navigation');

    planets.forEach((item) => expect(navigation).toHaveTextContent(item));
  });
});
